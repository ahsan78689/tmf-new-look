<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#f3f4f6',
                            100: '#e5e7eb',
                            200: '#d1d5db',
                            300: '#9ca3af',
                            400: '#6b7280',
                            500: '#374151',
                            600: '#7c3aed',
                            700: '#5b21b6',
                            800: '#4c1d95',
                            900: '#3730a3',
                        }
                    }
                }
            }
        }
    </script>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
    <div class="container mx-auto flex h-16 items-center px-4">
        <div class="mr-4 hidden md:flex">
            <a href="<?php echo home_url(); ?>" class="mr-8 flex items-center space-x-2">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <span class="text-xl font-bold text-gray-900"><?php bloginfo('name'); ?></span>
                <?php endif; ?>
            </a>
            
            <nav class="flex items-center space-x-6">
                <a href="<?php echo home_url(); ?>" class="text-sm font-medium hover:text-purple-600 transition-colors">Home</a>
                
                <!-- Digital Marketing Dropdown -->
                <div class="relative group">
                    <button class="flex items-center text-sm font-medium hover:text-purple-600 transition-colors">
                        Digital Marketing
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute top-full left-0 w-[1200px] bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="p-6 grid grid-cols-6 gap-6">
                            <div>
                                <h3 class="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                                    <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                    Organic Search
                                </h3>
                                <div class="space-y-2">
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/seo-strategy'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">SEO Strategy</a>
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/keyword-research'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Keyword Research</a>
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/on-page-optimization'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">On-Page Optimization</a>
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/off-page-optimization'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Off-Page Optimization</a>
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/technical-seo'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Technical SEO</a>
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/local-seo'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Local SEO</a>
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/ecommerce-seo'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">eCommerce SEO</a>
                                    <a href="<?php echo home_url('/digital-marketing/organic-search/seo-audits'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">SEO Audits</a>
                                </div>
                            </div>
                            
                            <div>
                                <h3 class="text-lg font-semibold mb-3 text-gray-900 flex items-center">
                                    <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                    Digital Advertising
                                </h3>
                                <div class="space-y-2">
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/ppc-management'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">PPC Management</a>
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/google-ads'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Google Ads</a>
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/social-media-advertising'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Social Media Advertising</a>
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/display-advertising'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Display Advertising</a>
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/remarketing'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Remarketing</a>
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/ecommerce-advertising'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Ecommerce Advertising</a>
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/video-advertising'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Video Advertising</a>
                                    <a href="<?php echo home_url('/digital-marketing/digital-advertising/advertising-strategy'); ?>" class="block text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors py-2 px-2 rounded">Advertising Strategy</a>
                                </div>
                            </div>
                            
                            <!-- Additional dropdown sections would follow similar pattern -->
                        </div>
                    </div>
                </div>

                <!-- Design & Development Dropdown -->
                <div class="relative group">
                    <button class="flex items-center text-sm font-medium hover:text-purple-600 transition-colors">
                        Design & Development
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <!-- Dropdown content would be similar to above -->
                </div>

                <a href="<?php echo home_url('/company/about-us'); ?>" class="text-sm font-medium hover:text-purple-600 transition-colors">About</a>
                <a href="<?php echo home_url('/company/contact-us'); ?>" class="text-sm font-medium hover:text-purple-600 transition-colors">Contact</a>
            </nav>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2" id="mobile-menu-button">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>

        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div class="w-full flex-1 md:w-auto md:flex-none">
                <a href="<?php echo home_url(); ?>" class="flex items-center space-x-2 md:hidden">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <span class="text-lg font-bold text-gray-900"><?php bloginfo('name'); ?></span>
                    <?php endif; ?>
                </a>
            </div>
            
            <nav class="flex items-center space-x-2">
                <button class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 sm:px-6 py-2 text-sm rounded-md transition-all duration-300" id="get-proposal-btn">
                    Get A Proposal
                </button>
            </nav>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden hidden bg-white border-t" id="mobile-menu">
        <div class="px-4 py-6 space-y-4">
            <a href="<?php echo home_url(); ?>" class="block text-sm font-medium text-gray-900">Home</a>
            <a href="<?php echo home_url('/digital-marketing'); ?>" class="block text-sm font-medium text-gray-900">Digital Marketing</a>
            <a href="<?php echo home_url('/web-development'); ?>" class="block text-sm font-medium text-gray-900">Web Development</a>
            <a href="<?php echo home_url('/company/about-us'); ?>" class="block text-sm font-medium text-gray-900">About</a>
            <a href="<?php echo home_url('/company/contact-us'); ?>" class="block text-sm font-medium text-gray-900">Contact</a>
        </div>
    </div>
</header>