<?php
/*
Template Name: About Us Page
*/

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <div class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-6">
                    <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    </svg>
                    About The Meta Future
                </div>
                <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                    Transforming Businesses Through
                    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Digital Innovation
                    </span>
                </h1>
                <p class="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto">
                    Since 2016, we've been helping businesses of all sizes achieve their digital goals through strategic marketing, innovative design, and robust development solutions. Our passion is your success.
                </p>
                <div class="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                    <a href="<?php echo home_url('/company/our-team'); ?>" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
                        Meet Our Team
                        <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                    <a href="<?php echo home_url('/company/case-studies'); ?>" class="border border-blue-200 hover:bg-blue-50 bg-transparent text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
                        View Our Work
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 sm:py-20 bg-white">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                <div class="text-center">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="text-2xl sm:text-3xl font-bold text-gray-900">8+</div>
                    <div class="text-sm text-gray-600">Years in Business</div>
                </div>
                <div class="text-center">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                    <div class="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div class="text-center">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                    </div>
                    <div class="text-2xl sm:text-3xl font-bold text-gray-900">200+</div>
                    <div class="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div class="text-center">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="text-2xl sm:text-3xl font-bold text-gray-900">15+</div>
                    <div class="text-sm text-gray-600">Countries Served</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                        Our Mission
                    </h2>
                    <p class="text-base sm:text-lg text-gray-600 mb-6">
                        We exist to empower businesses with digital solutions that drive growth, enhance customer experiences, and create lasting competitive advantages. Our mission is to be the trusted partner that transforms your digital presence into a powerful business asset.
                    </p>
                    <p class="text-base sm:text-lg text-gray-600 mb-8">
                        Through innovative strategies, cutting-edge technology, and exceptional service, we help our clients navigate the digital landscape and achieve measurable results that matter to their bottom line.
                    </p>
                    <a href="<?php echo home_url('/company/our-process'); ?>" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center">
                        Learn Our Process
                    </a>
                </div>
                <div class="relative">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/our-mission.jpg" 
                         alt="Our Mission" 
                         class="rounded-lg shadow-xl w-full h-[500px] object-cover">
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 sm:py-20">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Our Values</h2>
                <p class="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                    The principles that guide everything we do
                </p>
            </div>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
                <div class="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg p-6">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Client-First Approach</h3>
                    <p class="text-sm text-gray-600">Your success is our success. We prioritize your business goals in every decision we make.</p>
                </div>
                
                <div class="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg p-6">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Innovation & Excellence</h3>
                    <p class="text-sm text-gray-600">We stay ahead of industry trends and deliver cutting-edge solutions that drive results.</p>
                </div>
                
                <div class="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg p-6">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Transparency & Trust</h3>
                    <p class="text-sm text-gray-600">Open communication and honest reporting build lasting partnerships with our clients.</p>
                </div>
                
                <div class="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-white rounded-lg p-6">
                    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">Global Perspective</h3>
                    <p class="text-sm text-gray-600">Our diverse team brings international expertise to solve complex digital challenges.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    Ready to Work Together?
                </h2>
                <p class="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100">
                    Let's discuss how we can help transform your digital presence and drive business growth
                </p>
                <div class="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                    <a href="<?php echo home_url('/company/contact-us'); ?>" class="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
                        Start a Project
                    </a>
                    <a href="<?php echo home_url('/company/case-studies'); ?>" class="border border-white/20 bg-transparent text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center">
                        View Case Studies
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>