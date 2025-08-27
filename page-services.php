<?php
/*
Template Name: Services Page
*/

get_header(); ?>

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

    <!-- Services Categories -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <!-- Digital Marketing Services -->
            <div class="mb-20">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Digital Marketing</h2>
                    <p class="text-lg text-gray-600">Drive growth with strategic digital marketing solutions</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Organic Search -->
                    <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Organic Search</h3>
                        <p class="text-gray-600 text-sm mb-4">SEO strategies that improve rankings and drive organic traffic</p>
                        <ul class="space-y-1 text-sm text-gray-600">
                            <li>• SEO Strategy</li>
                            <li>• Keyword Research</li>
                            <li>• Technical SEO</li>
                            <li>• Local SEO</li>
                        </ul>
                        <a href="<?php echo home_url('/digital-marketing/organic-search'); ?>" class="mt-4 inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                            Learn More
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>

                    <!-- Digital Advertising -->
                    <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Digital Advertising</h3>
                        <p class="text-gray-600 text-sm mb-4">Targeted advertising campaigns that maximize ROI</p>
                        <ul class="space-y-1 text-sm text-gray-600">
                            <li>• Google Ads</li>
                            <li>• Social Media Ads</li>
                            <li>• Display Advertising</li>
                            <li>• Remarketing</li>
                        </ul>
                        <a href="<?php echo home_url('/digital-marketing/digital-advertising'); ?>" class="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                            Learn More
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>

                    <!-- Content Production -->
                    <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 text-white">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Content Production</h3>
                        <p class="text-gray-600 text-sm mb-4">High-quality content that engages and converts</p>
                        <ul class="space-y-1 text-sm text-gray-600">
                            <li>• Blog Writing</li>
                            <li>• Website Copy</li>
                            <li>• Product Descriptions</li>
                            <li>• Social Media Content</li>
                        </ul>
                        <a href="<?php echo home_url('/digital-marketing/content-production'); ?>" class="mt-4 inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                            Learn More
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>

                    <!-- Analytics & Tools -->
                    <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-600 to-red-600 text-white">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Analytics & Tools</h3>
                        <p class="text-gray-600 text-sm mb-4">Data-driven insights and optimization tools</p>
                        <ul class="space-y-1 text-sm text-gray-600">
                            <li>• Web Analytics</li>
                            <li>• Conversion Optimization</li>
                            <li>• Data Visualization</li>
                            <li>• Performance Reporting</li>
                        </ul>
                        <a href="<?php echo home_url('/digital-marketing/analytics-tools'); ?>" class="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                            Learn More
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Web Development Services -->
            <div class="mb-20">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Web Development</h2>
                    <p class="text-lg text-gray-600">Custom websites and applications that drive results</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Custom Websites -->
                    <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Custom Websites</h3>
                        <p class="text-gray-600 text-sm mb-4">Unique websites tailored to your business needs</p>
                        <a href="<?php echo home_url('/web-development/custom-websites'); ?>" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                            Learn More
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>

                    <!-- E-commerce Development -->
                    <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">E-commerce Development</h3>
                        <p class="text-gray-600 text-sm mb-4">Online stores that drive sales and revenue</p>
                        <a href="<?php echo home_url('/web-development/ecommerce-development'); ?>" class="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                            Learn More
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>

                    <!-- UI/UX Design -->
                    <div class="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-6">
                        <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-600 to-rose-600 text-white">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 13h3a2 2 0 012 2v3"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">UI/UX Design</h3>
                        <p class="text-gray-600 text-sm mb-4">User-centered design that converts and delights</p>
                        <a href="<?php echo home_url('/web-development/ui-ux-design'); ?>" class="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium">
                            Learn More
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
                <h3 class="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p class="text-xl mb-8 max-w-2xl mx-auto">
                    Let's discuss your project and create a custom solution that drives real results for your business.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="<?php echo home_url('/company/contact-us'); ?>" class="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
                        Get Started Today
                        <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                    <a href="<?php echo home_url('/company/case-studies'); ?>" class="border border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
                        View Case Studies
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>