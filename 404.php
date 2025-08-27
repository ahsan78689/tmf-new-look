<?php get_header(); ?>

<main>
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto text-center">
                <div class="mb-8">
                    <div class="text-8xl font-bold text-purple-600 mb-4">404</div>
                    <h1 class="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p class="text-lg text-gray-600 mb-8">
                        Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
                    </p>
                </div>

                <div class="space-y-4 mb-8">
                    <a href="<?php echo home_url(); ?>" class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center">
                        <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Go Home
                    </a>
                    <a href="<?php echo home_url('/company/contact-us'); ?>" class="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center ml-4">
                        Contact Us
                    </a>
                </div>

                <!-- Search Form -->
                <div class="max-w-md mx-auto">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Try searching for what you need:</h3>
                    <form role="search" method="get" action="<?php echo home_url('/'); ?>" class="flex space-x-2">
                        <input type="search" 
                               name="s" 
                               placeholder="Search our site..." 
                               class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </form>
                </div>

                <!-- Popular Pages -->
                <div class="mt-12">
                    <h3 class="text-lg font-semibold text-gray-900 mb-6">Popular Pages</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="<?php echo home_url('/digital-marketing'); ?>" class="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                            <h4 class="font-semibold text-gray-900 mb-1">Digital Marketing</h4>
                            <p class="text-sm text-gray-600">SEO, PPC, and content marketing services</p>
                        </a>
                        <a href="<?php echo home_url('/web-development'); ?>" class="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                            <h4 class="font-semibold text-gray-900 mb-1">Web Development</h4>
                            <p class="text-sm text-gray-600">Custom websites and e-commerce solutions</p>
                        </a>
                        <a href="<?php echo home_url('/company/about-us'); ?>" class="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                            <h4 class="font-semibold text-gray-900 mb-1">About Us</h4>
                            <p class="text-sm text-gray-600">Learn about our team and mission</p>
                        </a>
                        <a href="<?php echo home_url('/company/case-studies'); ?>" class="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                            <h4 class="font-semibold text-gray-900 mb-1">Case Studies</h4>
                            <p class="text-sm text-gray-600">See our successful client projects</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>