<?php
/*
Template Name: Blog Page
*/

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <div class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
                    <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    Our Blog
                </div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                    Insights & Resources for
                    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Digital Success
                    </span>
                </h1>
                <p class="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
                    Stay updated with the latest trends, tips, and strategies in digital marketing, web development, and business growth. Our expert team shares valuable insights to help your business thrive online.
                </p>
            </div>
        </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-12 sm:py-16 bg-gray-50">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                <?php
                $blog_query = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 9,
                    'post_status' => 'publish'
                ));
                
                if ($blog_query->have_posts()) :
                    while ($blog_query->have_posts()) : $blog_query->the_post();
                ?>
                    <div class="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden rounded-lg">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="aspect-video">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('blog-thumbnail', array('class' => 'w-full h-full object-cover hover:scale-105 transition-transform duration-300')); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-2">
                                <?php
                                $categories = get_the_category();
                                if ($categories) :
                                ?>
                                    <span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                        <?php echo esc_html($categories[0]->name); ?>
                                    </span>
                                <?php endif; ?>
                                <span class="text-xs text-gray-500"><?php echo get_reading_time(get_the_content()); ?> min read</span>
                            </div>
                            
                            <h3 class="text-lg leading-tight font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h3>
                            
                            <p class="text-sm text-gray-600 mb-4"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                            
                            <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <div class="flex items-center gap-1">
                                    <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                    <?php the_author(); ?>
                                </div>
                                <div class="flex items-center gap-1">
                                    <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <?php echo get_the_date(); ?>
                                </div>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="bg-transparent border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded text-sm font-medium transition-all duration-300 inline-block w-full text-center">
                                Read More
                            </a>
                        </div>
                    </div>
                <?php 
                    endwhile;
                    wp_reset_postdata();
                else :
                ?>
                    <div class="col-span-full text-center py-12">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">No blog posts found</h3>
                        <p class="text-gray-600">Please check back later for new content.</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">Stay Updated</h2>
                <p class="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
                    Subscribe to our newsletter and get the latest insights delivered to your inbox
                </p>
                <div class="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input type="email" 
                           placeholder="Enter your email" 
                           class="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 focus:outline-none">
                    <button class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
// Helper function to calculate reading time
function get_reading_time($content) {
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200); // Average reading speed
    return $reading_time;
}
?>

<?php get_footer(); ?>