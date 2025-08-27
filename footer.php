<footer class="bg-gray-900 text-white">
    <!-- Main Footer -->
    <div class="container mx-auto px-4 py-16">
        <div class="grid lg:grid-cols-5 gap-8">
            <!-- Company Info -->
            <div class="lg:col-span-2 space-y-6">
                <a href="<?php echo home_url(); ?>" class="inline-block">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <span class="text-2xl font-bold text-white"><?php bloginfo('name'); ?></span>
                    <?php endif; ?>
                </a>

                <p class="text-gray-300 leading-relaxed max-w-md">
                    We're a full-service digital marketing agency helping businesses grow their online presence and achieve measurable results through innovative strategies and cutting-edge technology.
                </p>

                <div class="space-y-3">
                    <div class="flex items-center space-x-3 text-gray-300">
                        <svg class="h-4 w-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span class="text-sm">123 Business Ave, Suite 100, City, State 12345</span>
                    </div>
                    <div class="flex items-center space-x-3 text-gray-300">
                        <svg class="h-4 w-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span class="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div class="flex items-center space-x-3 text-gray-300">
                        <svg class="h-4 w-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span class="text-sm">hello@themetafuture.com</span>
                    </div>
                </div>

                <div class="flex space-x-4">
                    <a href="#" class="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                        <svg class="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                    </a>
                    <a href="#" class="group w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                        <svg class="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                    </a>
                    <!-- Additional social icons -->
                </div>
            </div>

            <!-- Services -->
            <div>
                <h3 class="text-lg font-semibold mb-6 text-white">Services</h3>
                <ul class="space-y-3">
                    <li><a href="<?php echo home_url('/digital-marketing/seo-services'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">SEO Services</a></li>
                    <li><a href="<?php echo home_url('/digital-marketing/google-ads-management'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Google Ads Management</a></li>
                    <li><a href="<?php echo home_url('/digital-marketing/social-media-advertising'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Social Media Marketing</a></li>
                    <li><a href="<?php echo home_url('/web-development/custom-websites'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Web Development</a></li>
                    <li><a href="<?php echo home_url('/web-development/ecommerce-development'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">E-commerce Development</a></li>
                    <li><a href="<?php echo home_url('/web-development/ui-ux-design'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">UI/UX Design</a></li>
                </ul>
            </div>

            <!-- Company -->
            <div>
                <h3 class="text-lg font-semibold mb-6 text-white">Company</h3>
                <ul class="space-y-3">
                    <li><a href="<?php echo home_url('/company/about-us'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">About Us</a></li>
                    <li><a href="<?php echo home_url('/company/our-team'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Our Team</a></li>
                    <li><a href="<?php echo home_url('/company/case-studies'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Case Studies</a></li>
                    <li><a href="<?php echo home_url('/company/testimonials'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Testimonials</a></li>
                    <li><a href="<?php echo home_url('/company/careers'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Careers</a></li>
                    <li><a href="<?php echo home_url('/company/contact-us'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Contact Us</a></li>
                </ul>
            </div>

            <!-- Resources -->
            <div>
                <h3 class="text-lg font-semibold mb-6 text-white">Resources</h3>
                <ul class="space-y-3">
                    <li><a href="<?php echo home_url('/company/blog'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Blog</a></li>
                    <li><a href="<?php echo home_url('/insight'); ?>" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Insights</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Free Tools</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Templates</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Guides</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-purple-400 transition-colors text-sm">Webinars</a></li>
                </ul>
            </div>
        </div>

        <!-- Newsletter Signup -->
        <div class="mt-12 pt-8 border-t border-gray-800">
            <div class="max-w-md">
                <h3 class="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
                <p class="text-gray-300 text-sm mb-4">
                    Get the latest digital marketing tips and insights delivered to your inbox.
                </p>
                <div class="flex space-x-2">
                    <input type="email" 
                           placeholder="Enter your email" 
                           class="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 rounded-lg px-3 py-2 focus:outline-none">
                    <button class="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0">
                        <span class="relative z-10">
                            <svg class="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
        <div class="container mx-auto px-4 py-6">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div class="flex items-center space-x-4 text-sm text-gray-400">
                    <span>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</span>
                    <span class="hidden md:inline">|</span>
                    <div class="flex items-center space-x-4">
                        <a href="#" class="hover:text-purple-400 transition-colors">Privacy Policy</a>
                        <span class="text-gray-600">•</span>
                        <a href="#" class="hover:text-purple-400 transition-colors">Terms of Service</a>
                        <span class="text-gray-600">•</span>
                        <a href="#" class="hover:text-purple-400 transition-colors">Cookie Policy</a>
                    </div>
                </div>

                <div class="flex items-center space-x-1 text-sm text-gray-400">
                    <span>Made with</span>
                    <svg class="h-4 w-4 text-red-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>by The Meta Future Team</span>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<!-- JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send to WordPress AJAX handler
            console.log('Newsletter signup:', email);
            
            // Show success message
            alert('Thank you for subscribing!');
            this.reset();
        });
    }

    // Get proposal button
    const getProposalBtn = document.getElementById('get-proposal-btn');
    if (getProposalBtn) {
        getProposalBtn.addEventListener('click', function() {
            // Redirect to contact page or open modal
            window.location.href = '<?php echo home_url('/company/contact-us'); ?>';
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
</script>

</body>
</html>