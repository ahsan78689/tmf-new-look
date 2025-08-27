<?php get_header(); ?>

<main>
    <?php while (have_posts()) : the_post(); ?>
        <article class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <!-- Service Header -->
                    <div class="text-center mb-12">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="mb-8">
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-64 object-cover rounded-lg shadow-lg mx-auto')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <h1 class="text-4xl font-bold text-gray-900 mb-4"><?php the_title(); ?></h1>
                        
                        <?php
                        $price = get_post_meta(get_the_ID(), '_service_price', true);
                        if ($price) :
                        ?>
                            <div class="text-2xl font-bold text-purple-600 mb-6"><?php echo esc_html($price); ?></div>
                        <?php endif; ?>
                    </div>

                    <!-- Service Content -->
                    <div class="prose prose-lg max-w-none mb-12">
                        <?php the_content(); ?>
                    </div>

                    <!-- Service Features -->
                    <?php
                    $features = get_post_meta(get_the_ID(), '_service_features', true);
                    if ($features) :
                        $features_array = explode("\n", $features);
                    ?>
                        <div class="bg-gray-50 rounded-lg p-8 mb-12">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <?php foreach ($features_array as $feature) : ?>
                                    <?php if (trim($feature)) : ?>
                                        <div class="flex items-center space-x-3">
                                            <svg class="h-5 w-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            <span class="text-gray-700"><?php echo esc_html(trim($feature)); ?></span>
                                        </div>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    <?php endif; ?>

                    <!-- CTA Section -->
                    <div class="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
                        <h3 class="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                        <p class="text-lg mb-6">Let's discuss how this service can help grow your business</p>
                        <a href="<?php echo home_url('/company/contact-us'); ?>" class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center">
                            Get Started Today
                            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>