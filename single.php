<?php get_header(); ?>

<main>
    <?php while (have_posts()) : the_post(); ?>
        <article class="py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <!-- Article Header -->
                    <header class="text-center mb-12">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="mb-8">
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-64 object-cover rounded-lg shadow-lg mx-auto')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <?php
                        $categories = get_the_category();
                        if ($categories) :
                        ?>
                            <div class="mb-4">
                                <span class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                                    <?php echo esc_html($categories[0]->name); ?>
                                </span>
                            </div>
                        <?php endif; ?>
                        
                        <h1 class="text-4xl font-bold text-gray-900 mb-6"><?php the_title(); ?></h1>
                        
                        <div class="flex items-center justify-center gap-6 text-sm text-gray-500 mb-8">
                            <div class="flex items-center gap-1">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                <?php the_author(); ?>
                            </div>
                            <div class="flex items-center gap-1">
                                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <?php echo get_the_date(); ?>
                            </div>
                            <span><?php echo get_reading_time(get_the_content()); ?> min read</span>
                        </div>
                    </header>

                    <!-- Article Content -->
                    <div class="prose prose-lg max-w-none mb-12">
                        <?php the_content(); ?>
                    </div>

                    <!-- Article Footer -->
                    <footer class="border-t border-gray-200 pt-8">
                        <!-- Tags -->
                        <?php
                        $tags = get_the_tags();
                        if ($tags) :
                        ?>
                            <div class="mb-8">
                                <h4 class="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
                                <div class="flex flex-wrap gap-2">
                                    <?php foreach ($tags as $tag) : ?>
                                        <a href="<?php echo get_tag_link($tag->term_id); ?>" class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-purple-100 hover:text-purple-800 transition-colors">
                                            <?php echo esc_html($tag->name); ?>
                                        </a>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>

                        <!-- Author Bio -->
                        <div class="bg-gray-50 rounded-lg p-6 mb-8">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <?php echo get_avatar(get_the_author_meta('ID'), 64, '', '', array('class' => 'w-16 h-16 rounded-full')); ?>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-gray-900 mb-2">About <?php the_author(); ?></h4>
                                    <p class="text-gray-600 mb-4"><?php echo get_the_author_meta('description') ?: 'Digital marketing expert at The Meta Future.'; ?></p>
                                    <div class="flex space-x-4">
                                        <?php if (get_the_author_meta('twitter')) : ?>
                                            <a href="<?php echo esc_url(get_the_author_meta('twitter')); ?>" class="text-blue-500 hover:text-blue-600">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                                </svg>
                                            </a>
                                        <?php endif; ?>
                                        <?php if (get_the_author_meta('linkedin')) : ?>
                                            <a href="<?php echo esc_url(get_the_author_meta('linkedin')); ?>" class="text-blue-700 hover:text-blue-800">
                                                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Share Buttons -->
                        <div class="flex items-center justify-between">
                            <h4 class="text-lg font-semibold text-gray-900">Share this article</h4>
                            <div class="flex space-x-4">
                                <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode(get_permalink()); ?>&text=<?php echo urlencode(get_the_title()); ?>" 
                                   target="_blank" 
                                   class="text-blue-500 hover:text-blue-600 transition-colors">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink()); ?>" 
                                   target="_blank" 
                                   class="text-blue-600 hover:text-blue-700 transition-colors">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode(get_permalink()); ?>" 
                                   target="_blank" 
                                   class="text-blue-700 hover:text-blue-800 transition-colors">
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </footer>

                    <!-- Related Posts -->
                    <?php
                    $related_posts = get_posts(array(
                        'category__in' => wp_get_post_categories(get_the_ID()),
                        'numberposts' => 3,
                        'post__not_in' => array(get_the_ID()),
                        'orderby' => 'rand'
                    ));
                    
                    if ($related_posts) :
                    ?>
                        <section class="mt-16 pt-8 border-t border-gray-200">
                            <h3 class="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <?php foreach ($related_posts as $post) : setup_postdata($post); ?>
                                    <div class="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg overflow-hidden">
                                        <?php if (has_post_thumbnail()) : ?>
                                            <div class="aspect-video">
                                                <a href="<?php the_permalink(); ?>">
                                                    <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover')); ?>
                                                </a>
                                            </div>
                                        <?php endif; ?>
                                        
                                        <div class="p-4">
                                            <h4 class="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                            </h4>
                                            <p class="text-gray-600 text-sm mb-4"><?php echo wp_trim_words(get_the_excerpt(), 15); ?></p>
                                            <a href="<?php the_permalink(); ?>" class="text-purple-600 hover:text-purple-700 font-medium text-sm">
                                                Read More →
                                            </a>
                                        </div>
                                    </div>
                                <?php endforeach; wp_reset_postdata(); ?>
                            </div>
                        </section>
                    <?php endif; ?>
                </div>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>