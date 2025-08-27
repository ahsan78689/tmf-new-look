<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 sm:py-20 lg:py-24">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Our <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                    Comprehensive digital solutions designed to help your business succeed online
                </p>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg overflow-hidden">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="relative overflow-hidden">
                                    <?php the_post_thumbnail('service-thumbnail', array('class' => 'w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300')); ?>
                                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            <?php endif; ?>
                            
                            <div class="p-6">
                                <?php
                                $icon = get_post_meta(get_the_ID(), '_service_icon', true);
                                if ($icon) :
                                ?>
                                    <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <?php echo meta_future_get_service_icon($icon); ?>
                                        </svg>
                                    </div>
                                <?php endif; ?>
                                
                                <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                
                                <p class="text-gray-600 mb-4"><?php the_excerpt(); ?></p>
                                
                                <?php
                                $price = get_post_meta(get_the_ID(), '_service_price', true);
                                if ($price) :
                                ?>
                                    <div class="text-lg font-bold text-purple-600 mb-4"><?php echo esc_html($price); ?></div>
                                <?php endif; ?>
                                
                                <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                                    Learn More
                                    <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    <?php endwhile; ?>
                <?php else : ?>
                    <div class="col-span-full text-center py-12">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                        <p class="text-gray-600">Please check back later for our services.</p>
                    </div>
                <?php endif; ?>
            </div>
            
            <!-- Pagination -->
            <div class="mt-12 text-center">
                <?php
                the_posts_pagination(array(
                    'prev_text' => __('Previous', 'meta-future'),
                    'next_text' => __('Next', 'meta-future'),
                    'class' => 'pagination',
                ));
                ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>