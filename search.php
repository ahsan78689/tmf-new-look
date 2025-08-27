<?php get_header(); ?>

<main>
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <!-- Search Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">
                        Search Results for: <span class="text-purple-600">"<?php echo get_search_query(); ?>"</span>
                    </h1>
                    <p class="text-lg text-gray-600">
                        <?php
                        global $wp_query;
                        echo $wp_query->found_posts . ' result' . ($wp_query->found_posts != 1 ? 's' : '') . ' found';
                        ?>
                    </p>
                </div>

                <!-- Search Form -->
                <div class="mb-12">
                    <form role="search" method="get" action="<?php echo home_url('/'); ?>" class="max-w-md mx-auto">
                        <div class="flex space-x-2">
                            <input type="search" 
                                   name="s" 
                                   value="<?php echo get_search_query(); ?>"
                                   placeholder="Search again..." 
                                   class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Search Results -->
                <div class="space-y-8">
                    <?php if (have_posts()) : ?>
                        <?php while (have_posts()) : the_post(); ?>
                            <div class="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg p-6">
                                <div class="flex items-start space-x-4">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <div class="flex-shrink-0">
                                            <a href="<?php the_permalink(); ?>">
                                                <?php the_post_thumbnail('thumbnail', array('class' => 'w-20 h-20 object-cover rounded-lg')); ?>
                                            </a>
                                        </div>
                                    <?php endif; ?>
                                    
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <span class="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                                                <?php echo get_post_type_object(get_post_type())->labels->singular_name; ?>
                                            </span>
                                            <?php
                                            $categories = get_the_category();
                                            if ($categories) :
                                            ?>
                                                <span class="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
                                                    <?php echo esc_html($categories[0]->name); ?>
                                                </span>
                                            <?php endif; ?>
                                        </div>
                                        
                                        <h3 class="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                        </h3>
                                        
                                        <p class="text-gray-600 mb-4"><?php echo wp_trim_words(get_the_excerpt(), 30); ?></p>
                                        
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center space-x-4 text-sm text-gray-500">
                                                <span><?php the_author(); ?></span>
                                                <span><?php echo get_the_date(); ?></span>
                                            </div>
                                            
                                            <a href="<?php the_permalink(); ?>" class="text-purple-600 hover:text-purple-700 font-medium">
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                        
                        <!-- Pagination -->
                        <div class="mt-12 text-center">
                            <?php
                            the_posts_pagination(array(
                                'prev_text' => __('← Previous', 'meta-future'),
                                'next_text' => __('Next →', 'meta-future'),
                            ));
                            ?>
                        </div>
                        
                    <?php else : ?>
                        <div class="text-center py-12">
                            <div class="mb-8">
                                <svg class="h-24 w-24 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                            <p class="text-gray-600 mb-8">
                                Sorry, no results were found for "<?php echo get_search_query(); ?>". Try searching with different keywords.
                            </p>
                            
                            <!-- Search Suggestions -->
                            <div class="bg-gray-50 rounded-lg p-6">
                                <h4 class="font-semibold text-gray-900 mb-4">Try searching for:</h4>
                                <div class="flex flex-wrap gap-2 justify-center">
                                    <a href="<?php echo home_url('?s=SEO'); ?>" class="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:text-purple-600 border hover:border-purple-300 transition-colors">SEO</a>
                                    <a href="<?php echo home_url('?s=web+development'); ?>" class="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:text-purple-600 border hover:border-purple-300 transition-colors">Web Development</a>
                                    <a href="<?php echo home_url('?s=digital+marketing'); ?>" class="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:text-purple-600 border hover:border-purple-300 transition-colors">Digital Marketing</a>
                                    <a href="<?php echo home_url('?s=design'); ?>" class="bg-white px-3 py-1 rounded-full text-sm text-gray-700 hover:text-purple-600 border hover:border-purple-300 transition-colors">Design</a>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>