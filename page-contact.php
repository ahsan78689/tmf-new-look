<?php
/*
Template Name: Contact Us Page
*/

get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-20">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                    Get in Touch with
                    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Our Team
                    </span>
                </h1>
                <p class="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
                    Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve your business goals.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-16 sm:py-20">
        <div class="container px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div>
                    <div class="border-0 shadow-xl bg-white rounded-lg p-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                        <p class="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                        
                        <form id="contact-form" class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <label for="firstName" class="text-sm font-medium text-gray-700">First Name</label>
                                    <input id="firstName" name="firstName" type="text" placeholder="John" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                </div>
                                <div class="space-y-2">
                                    <label for="lastName" class="text-sm font-medium text-gray-700">Last Name</label>
                                    <input id="lastName" name="lastName" type="text" placeholder="Doe" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                                </div>
                            </div>
                            
                            <div class="space-y-2">
                                <label for="email" class="text-sm font-medium text-gray-700">Email Address</label>
                                <input id="email" name="email" type="email" placeholder="john@example.com" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                            </div>
                            
                            <div class="space-y-2">
                                <label for="phone" class="text-sm font-medium text-gray-700">Phone Number</label>
                                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                            
                            <div class="space-y-2">
                                <label for="company" class="text-sm font-medium text-gray-700">Company Name</label>
                                <input id="company" name="company" type="text" placeholder="Your Company" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
                            
                            <div class="space-y-2">
                                <label for="service" class="text-sm font-medium text-gray-700">Service Interest</label>
                                <select id="service" name="service" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select a service</option>
                                    <option value="seo">SEO Services</option>
                                    <option value="google-ads">Google Ads Management</option>
                                    <option value="social-media">Social Media Advertising</option>
                                    <option value="content-marketing">Content Marketing</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="ui-ux-design">UI/UX Design</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div class="space-y-2">
                                <label for="budget" class="text-sm font-medium text-gray-700">Project Budget</label>
                                <select id="budget" name="budget" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Select budget range</option>
                                    <option value="under-5k">Under $5,000</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="over-50k">Over $50,000</option>
                                </select>
                            </div>
                            
                            <div class="space-y-2">
                                <label for="message" class="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project, goals, and how we can help..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                            </div>
                            
                            <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                                <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="bg-blue-100 p-3 rounded-lg">
                                    <svg class="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Email Us</h3>
                                    <p class="text-gray-600"><?php echo get_theme_mod('contact_email', 'hello@metafuture.com'); ?></p>
                                    <p class="text-sm text-gray-500">We'll respond within 24 hours</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="bg-green-100 p-3 rounded-lg">
                                    <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Call Us</h3>
                                    <p class="text-gray-600"><?php echo get_theme_mod('contact_phone', '+1 (555) 123-4567'); ?></p>
                                    <p class="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="bg-purple-100 p-3 rounded-lg">
                                    <svg class="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">Visit Us</h3>
                                    <p class="text-gray-600"><?php echo get_theme_mod('contact_address', '123 Digital Street<br>Tech City, TC 12345'); ?></p>
                                    <p class="text-sm text-gray-500">By appointment only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            formData.append('action', 'contact_form');
            formData.append('nonce', '<?php echo wp_create_nonce('meta_future_nonce'); ?>');
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(data.data);
                    contactForm.reset();
                } else {
                    alert(data.data || 'An error occurred. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});
</script>

<?php get_footer(); ?>