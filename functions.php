<?php
/**
 * The Meta Future WordPress Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function meta_future_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'meta-future'),
        'footer' => __('Footer Menu', 'meta-future'),
    ));

    // Add custom image sizes
    add_image_size('hero-banner', 1200, 600, true);
    add_image_size('service-thumbnail', 400, 300, true);
    add_image_size('blog-thumbnail', 600, 400, true);
}
add_action('after_setup_theme', 'meta_future_setup');

/**
 * Enqueue Scripts and Styles
 */
function meta_future_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('meta-future-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('meta-future-script', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('meta-future-script', 'meta_future_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('meta_future_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'meta_future_scripts');

/**
 * Register Widget Areas
 */
function meta_future_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'meta-future'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'meta-future'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'meta-future'),
        'id'            => 'footer-widgets',
        'description'   => __('Widgets for the footer area.', 'meta-future'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'meta_future_widgets_init');

/**
 * Custom Post Types
 */
function meta_future_custom_post_types() {
    // Services Post Type
    register_post_type('services', array(
        'labels' => array(
            'name' => __('Services', 'meta-future'),
            'singular_name' => __('Service', 'meta-future'),
            'add_new' => __('Add New Service', 'meta-future'),
            'add_new_item' => __('Add New Service', 'meta-future'),
            'edit_item' => __('Edit Service', 'meta-future'),
            'new_item' => __('New Service', 'meta-future'),
            'view_item' => __('View Service', 'meta-future'),
            'search_items' => __('Search Services', 'meta-future'),
            'not_found' => __('No services found', 'meta-future'),
            'not_found_in_trash' => __('No services found in trash', 'meta-future'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-admin-tools',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'services'),
    ));

    // Case Studies Post Type
    register_post_type('case_studies', array(
        'labels' => array(
            'name' => __('Case Studies', 'meta-future'),
            'singular_name' => __('Case Study', 'meta-future'),
            'add_new' => __('Add New Case Study', 'meta-future'),
            'add_new_item' => __('Add New Case Study', 'meta-future'),
            'edit_item' => __('Edit Case Study', 'meta-future'),
            'new_item' => __('New Case Study', 'meta-future'),
            'view_item' => __('View Case Study', 'meta-future'),
            'search_items' => __('Search Case Studies', 'meta-future'),
            'not_found' => __('No case studies found', 'meta-future'),
            'not_found_in_trash' => __('No case studies found in trash', 'meta-future'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'case-studies'),
    ));

    // Team Members Post Type
    register_post_type('team_members', array(
        'labels' => array(
            'name' => __('Team Members', 'meta-future'),
            'singular_name' => __('Team Member', 'meta-future'),
            'add_new' => __('Add New Team Member', 'meta-future'),
            'add_new_item' => __('Add New Team Member', 'meta-future'),
            'edit_item' => __('Edit Team Member', 'meta-future'),
            'new_item' => __('New Team Member', 'meta-future'),
            'view_item' => __('View Team Member', 'meta-future'),
            'search_items' => __('Search Team Members', 'meta-future'),
            'not_found' => __('No team members found', 'meta-future'),
            'not_found_in_trash' => __('No team members found in trash', 'meta-future'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'team'),
    ));
}
add_action('init', 'meta_future_custom_post_types');

/**
 * Custom Taxonomies
 */
function meta_future_custom_taxonomies() {
    // Service Categories
    register_taxonomy('service_category', 'services', array(
        'labels' => array(
            'name' => __('Service Categories', 'meta-future'),
            'singular_name' => __('Service Category', 'meta-future'),
        ),
        'hierarchical' => true,
        'public' => true,
        'rewrite' => array('slug' => 'service-category'),
    ));

    // Industries
    register_taxonomy('industry', array('case_studies', 'services'), array(
        'labels' => array(
            'name' => __('Industries', 'meta-future'),
            'singular_name' => __('Industry', 'meta-future'),
        ),
        'hierarchical' => true,
        'public' => true,
        'rewrite' => array('slug' => 'industry'),
    ));
}
add_action('init', 'meta_future_custom_taxonomies');

/**
 * AJAX Handler for Newsletter Signup
 */
function meta_future_newsletter_signup() {
    check_ajax_referer('meta_future_nonce', 'nonce');
    
    $email = sanitize_email($_POST['email']);
    
    if (!is_email($email)) {
        wp_die('Invalid email address');
    }
    
    // Here you would typically integrate with your email service
    // For now, we'll just store in WordPress options or custom table
    
    $subscribers = get_option('meta_future_subscribers', array());
    if (!in_array($email, $subscribers)) {
        $subscribers[] = $email;
        update_option('meta_future_subscribers', $subscribers);
    }
    
    wp_send_json_success('Successfully subscribed!');
}
add_action('wp_ajax_newsletter_signup', 'meta_future_newsletter_signup');
add_action('wp_ajax_nopriv_newsletter_signup', 'meta_future_newsletter_signup');

/**
 * AJAX Handler for Contact Form
 */
function meta_future_contact_form() {
    check_ajax_referer('meta_future_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $company = sanitize_text_field($_POST['company']);
    $phone = sanitize_text_field($_POST['phone']);
    $service = sanitize_text_field($_POST['service']);
    $budget = sanitize_text_field($_POST['budget']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error('Please fill in all required fields.');
    }
    
    if (!is_email($email)) {
        wp_send_json_error('Please enter a valid email address.');
    }
    
    // Send email notification
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission - ' . get_bloginfo('name');
    $email_message = "New contact form submission:\n\n";
    $email_message .= "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Company: $company\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Service: $service\n";
    $email_message .= "Budget: $budget\n";
    $email_message .= "Message: $message\n";
    
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    if (wp_mail($to, $subject, $email_message, $headers)) {
        wp_send_json_success('Thank you! We will get back to you within 24 hours.');
    } else {
        wp_send_json_error('Sorry, there was an error sending your message. Please try again.');
    }
}
add_action('wp_ajax_contact_form', 'meta_future_contact_form');
add_action('wp_ajax_nopriv_contact_form', 'meta_future_contact_form');

/**
 * Customizer Settings
 */
function meta_future_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'meta-future'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Digital Solutions That Drive Growth',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'meta-future'),
        'section' => 'hero_section',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_description', array(
        'default' => 'From SEO strategy to web development, we provide comprehensive digital marketing and development services that help your business thrive in the digital landscape.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_description', array(
        'label' => __('Hero Description', 'meta-future'),
        'section' => 'hero_section',
        'type' => 'textarea',
    ));

    // Contact Information
    $wp_customize->add_section('contact_info', array(
        'title' => __('Contact Information', 'meta-future'),
        'priority' => 35,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default' => '+1 (555) 123-4567',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => __('Phone Number', 'meta-future'),
        'section' => 'contact_info',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => 'hello@themetafuture.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => __('Email Address', 'meta-future'),
        'section' => 'contact_info',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default' => '123 Business Ave, Suite 100, City, State 12345',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => __('Address', 'meta-future'),
        'section' => 'contact_info',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'meta_future_customize_register');

/**
 * Add Custom Meta Fields
 */
function meta_future_add_meta_boxes() {
    add_meta_box(
        'service_details',
        __('Service Details', 'meta-future'),
        'meta_future_service_details_callback',
        'services',
        'normal',
        'high'
    );
    
    add_meta_box(
        'case_study_details',
        __('Case Study Details', 'meta-future'),
        'meta_future_case_study_details_callback',
        'case_studies',
        'normal',
        'high'
    );
    
    add_meta_box(
        'team_member_details',
        __('Team Member Details', 'meta-future'),
        'meta_future_team_member_details_callback',
        'team_members',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'meta_future_add_meta_boxes');

/**
 * Service Details Meta Box Callback
 */
function meta_future_service_details_callback($post) {
    wp_nonce_field('meta_future_save_service_details', 'meta_future_service_details_nonce');
    
    $price = get_post_meta($post->ID, '_service_price', true);
    $features = get_post_meta($post->ID, '_service_features', true);
    $icon = get_post_meta($post->ID, '_service_icon', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="service_price">Price</label></th>';
    echo '<td><input type="text" id="service_price" name="service_price" value="' . esc_attr($price) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="service_features">Features (one per line)</label></th>';
    echo '<td><textarea id="service_features" name="service_features" rows="5" class="large-text">' . esc_textarea($features) . '</textarea></td></tr>';
    echo '<tr><th><label for="service_icon">Icon Class</label></th>';
    echo '<td><input type="text" id="service_icon" name="service_icon" value="' . esc_attr($icon) . '" class="regular-text" placeholder="e.g., search, target, code" /></td></tr>';
    echo '</table>';
}

/**
 * Case Study Details Meta Box Callback
 */
function meta_future_case_study_details_callback($post) {
    wp_nonce_field('meta_future_save_case_study_details', 'meta_future_case_study_details_nonce');
    
    $client = get_post_meta($post->ID, '_case_study_client', true);
    $industry = get_post_meta($post->ID, '_case_study_industry', true);
    $challenge = get_post_meta($post->ID, '_case_study_challenge', true);
    $solution = get_post_meta($post->ID, '_case_study_solution', true);
    $results = get_post_meta($post->ID, '_case_study_results', true);
    $testimonial = get_post_meta($post->ID, '_case_study_testimonial', true);
    $testimonial_author = get_post_meta($post->ID, '_case_study_testimonial_author', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="case_study_client">Client Name</label></th>';
    echo '<td><input type="text" id="case_study_client" name="case_study_client" value="' . esc_attr($client) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="case_study_industry">Industry</label></th>';
    echo '<td><input type="text" id="case_study_industry" name="case_study_industry" value="' . esc_attr($industry) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="case_study_challenge">Challenge</label></th>';
    echo '<td><textarea id="case_study_challenge" name="case_study_challenge" rows="3" class="large-text">' . esc_textarea($challenge) . '</textarea></td></tr>';
    echo '<tr><th><label for="case_study_solution">Solution</label></th>';
    echo '<td><textarea id="case_study_solution" name="case_study_solution" rows="3" class="large-text">' . esc_textarea($solution) . '</textarea></td></tr>';
    echo '<tr><th><label for="case_study_results">Results (one per line)</label></th>';
    echo '<td><textarea id="case_study_results" name="case_study_results" rows="4" class="large-text">' . esc_textarea($results) . '</textarea></td></tr>';
    echo '<tr><th><label for="case_study_testimonial">Testimonial</label></th>';
    echo '<td><textarea id="case_study_testimonial" name="case_study_testimonial" rows="3" class="large-text">' . esc_textarea($testimonial) . '</textarea></td></tr>';
    echo '<tr><th><label for="case_study_testimonial_author">Testimonial Author</label></th>';
    echo '<td><input type="text" id="case_study_testimonial_author" name="case_study_testimonial_author" value="' . esc_attr($testimonial_author) . '" class="regular-text" /></td></tr>';
    echo '</table>';
}

/**
 * Team Member Details Meta Box Callback
 */
function meta_future_team_member_details_callback($post) {
    wp_nonce_field('meta_future_save_team_member_details', 'meta_future_team_member_details_nonce');
    
    $position = get_post_meta($post->ID, '_team_member_position', true);
    $department = get_post_meta($post->ID, '_team_member_department', true);
    $bio = get_post_meta($post->ID, '_team_member_bio', true);
    $linkedin = get_post_meta($post->ID, '_team_member_linkedin', true);
    $twitter = get_post_meta($post->ID, '_team_member_twitter', true);
    $email = get_post_meta($post->ID, '_team_member_email', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="team_member_position">Position</label></th>';
    echo '<td><input type="text" id="team_member_position" name="team_member_position" value="' . esc_attr($position) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="team_member_department">Department</label></th>';
    echo '<td><input type="text" id="team_member_department" name="team_member_department" value="' . esc_attr($department) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="team_member_bio">Bio</label></th>';
    echo '<td><textarea id="team_member_bio" name="team_member_bio" rows="4" class="large-text">' . esc_textarea($bio) . '</textarea></td></tr>';
    echo '<tr><th><label for="team_member_linkedin">LinkedIn URL</label></th>';
    echo '<td><input type="url" id="team_member_linkedin" name="team_member_linkedin" value="' . esc_url($linkedin) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="team_member_twitter">Twitter URL</label></th>';
    echo '<td><input type="url" id="team_member_twitter" name="team_member_twitter" value="' . esc_url($twitter) . '" class="regular-text" /></td></tr>';
    echo '<tr><th><label for="team_member_email">Email</label></th>';
    echo '<td><input type="email" id="team_member_email" name="team_member_email" value="' . esc_attr($email) . '" class="regular-text" /></td></tr>';
    echo '</table>';
}

/**
 * Save Meta Box Data
 */
function meta_future_save_meta_boxes($post_id) {
    // Check if user has permission to edit
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Save service details
    if (isset($_POST['meta_future_service_details_nonce']) && wp_verify_nonce($_POST['meta_future_service_details_nonce'], 'meta_future_save_service_details')) {
        if (isset($_POST['service_price'])) {
            update_post_meta($post_id, '_service_price', sanitize_text_field($_POST['service_price']));
        }
        if (isset($_POST['service_features'])) {
            update_post_meta($post_id, '_service_features', sanitize_textarea_field($_POST['service_features']));
        }
        if (isset($_POST['service_icon'])) {
            update_post_meta($post_id, '_service_icon', sanitize_text_field($_POST['service_icon']));
        }
    }
    
    // Save case study details
    if (isset($_POST['meta_future_case_study_details_nonce']) && wp_verify_nonce($_POST['meta_future_case_study_details_nonce'], 'meta_future_save_case_study_details')) {
        $fields = array('client', 'industry', 'challenge', 'solution', 'results', 'testimonial', 'testimonial_author');
        foreach ($fields as $field) {
            if (isset($_POST['case_study_' . $field])) {
                update_post_meta($post_id, '_case_study_' . $field, sanitize_textarea_field($_POST['case_study_' . $field]));
            }
        }
    }
    
    // Save team member details
    if (isset($_POST['meta_future_team_member_details_nonce']) && wp_verify_nonce($_POST['meta_future_team_member_details_nonce'], 'meta_future_save_team_member_details')) {
        $fields = array(
            'position' => 'sanitize_text_field',
            'department' => 'sanitize_text_field',
            'bio' => 'sanitize_textarea_field',
            'linkedin' => 'esc_url_raw',
            'twitter' => 'esc_url_raw',
            'email' => 'sanitize_email'
        );
        
        foreach ($fields as $field => $sanitize_function) {
            if (isset($_POST['team_member_' . $field])) {
                update_post_meta($post_id, '_team_member_' . $field, $sanitize_function($_POST['team_member_' . $field]));
            }
        }
    }
}
add_action('save_post', 'meta_future_save_meta_boxes');

/**
 * Helper Functions
 */

// Get service icon SVG
function meta_future_get_service_icon($icon_name) {
    $icons = array(
        'search' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>',
        'target' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>',
        'code' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>',
        'palette' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h3a2 2 0 012 2v3"></path>',
        'chart' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>',
    );
    
    return isset($icons[$icon_name]) ? $icons[$icon_name] : $icons['search'];
}

/**
 * Excerpt Length
 */
function meta_future_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'meta_future_excerpt_length');

/**
 * Excerpt More
 */
function meta_future_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'meta_future_excerpt_more');

/**
 * Custom Body Classes
 */
function meta_future_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    
    if (is_page_template('page-templates/landing-page.php')) {
        $classes[] = 'landing-page';
    }
    
    return $classes;
}
add_filter('body_class', 'meta_future_body_classes');

/**
 * Theme Customization Options
 */
function meta_future_theme_options() {
    add_theme_page(
        'Meta Future Options',
        'Theme Options',
        'manage_options',
        'meta-future-options',
        'meta_future_options_page'
    );
}
add_action('admin_menu', 'meta_future_theme_options');

function meta_future_options_page() {
    ?>
    <div class="wrap">
        <h1>Meta Future Theme Options</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('meta_future_options');
            do_settings_sections('meta_future_options');
            ?>
            <table class="form-table">
                <tr>
                    <th scope="row">Google Analytics ID</th>
                    <td><input type="text" name="meta_future_ga_id" value="<?php echo esc_attr(get_option('meta_future_ga_id')); ?>" /></td>
                </tr>
                <tr>
                    <th scope="row">Facebook Pixel ID</th>
                    <td><input type="text" name="meta_future_fb_pixel" value="<?php echo esc_attr(get_option('meta_future_fb_pixel')); ?>" /></td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

/**
 * Register Theme Options
 */
function meta_future_register_settings() {
    register_setting('meta_future_options', 'meta_future_ga_id');
    register_setting('meta_future_options', 'meta_future_fb_pixel');
}
add_action('admin_init', 'meta_future_register_settings');

/**
 * Add Google Analytics and Facebook Pixel
 */
function meta_future_tracking_codes() {
    $ga_id = get_option('meta_future_ga_id');
    $fb_pixel = get_option('meta_future_fb_pixel');
    
    if ($ga_id) {
        ?>
        <!-- Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo esc_attr($ga_id); ?>"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '<?php echo esc_attr($ga_id); ?>');
        </script>
        <?php
    }
    
    if ($fb_pixel) {
        ?>
        <!-- Facebook Pixel -->
        <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '<?php echo esc_attr($fb_pixel); ?>');
            fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=<?php echo esc_attr($fb_pixel); ?>&ev=PageView&noscript=1"/></noscript>
        <?php
    }
}
add_action('wp_head', 'meta_future_tracking_codes');