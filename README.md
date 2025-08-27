# The Meta Future WordPress Theme

A modern, responsive WordPress theme for digital marketing agencies and web development companies.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Post Types**: Services, Case Studies, Team Members
- **SEO Optimized**: Clean code and semantic markup
- **Performance Focused**: Optimized for speed and Core Web Vitals
- **Accessibility Ready**: WCAG 2.1 compliant
- **Customizer Integration**: Easy theme customization
- **Contact Forms**: Built-in AJAX contact forms
- **Newsletter Signup**: Integrated email subscription
- **Analytics Ready**: Google Analytics and Facebook Pixel support

## Installation

1. Upload the theme folder to `/wp-content/themes/`
2. Activate the theme in WordPress admin
3. Go to Appearance > Customize to configure theme settings
4. Add your logo, contact information, and social media links
5. Create pages using the included page templates

## Page Templates

- `index.php` - Homepage template
- `page-about.php` - About Us page
- `page-contact.php` - Contact Us page
- `page-services.php` - Services overview page
- `page-blog.php` - Blog listing page
- `single.php` - Blog post template
- `single-services.php` - Individual service page
- `archive-services.php` - Services archive
- `404.php` - Error page
- `search.php` - Search results page

## Custom Post Types

### Services
- Custom fields: Price, Features, Icon
- Taxonomy: Service Categories, Industries

### Case Studies
- Custom fields: Client, Industry, Challenge, Solution, Results, Testimonial
- Taxonomy: Industries

### Team Members
- Custom fields: Position, Department, Bio, Social Links

## Customization

### Theme Options
Access theme options via Appearance > Theme Options:
- Google Analytics ID
- Facebook Pixel ID
- Contact Information
- Social Media Links

### Customizer Settings
Available in Appearance > Customize:
- Hero Section content
- Contact information
- Logo and site identity

## Development

### File Structure
```
/
├── style.css (required by WordPress)
├── index.php (homepage)
├── header.php (site header)
├── footer.php (site footer)
├── functions.php (theme functions)
├── single.php (blog posts)
├── page-*.php (page templates)
├── archive-*.php (archive templates)
├── 404.php (error page)
├── search.php (search results)
├── assets/
│   ├── css/custom.css
│   ├── js/main.js
│   └── images/
└── page-templates/
```

### Technologies Used
- **PHP**: WordPress theme development
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Interactive functionality
- **WordPress APIs**: Custom post types, meta fields, customizer

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (with graceful degradation)

## Performance

- **Optimized Images**: Responsive images with lazy loading
- **Minified Assets**: Compressed CSS and JavaScript
- **Caching Ready**: Compatible with caching plugins
- **CDN Ready**: Optimized for content delivery networks

## SEO Features

- **Schema Markup**: Structured data for better search visibility
- **Open Graph**: Social media sharing optimization
- **Meta Tags**: Proper meta descriptions and titles
- **Sitemap Ready**: Compatible with SEO plugins

## Accessibility

- **WCAG 2.1 AA**: Compliant with accessibility standards
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Optimized for assistive technologies
- **Color Contrast**: Meets contrast ratio requirements

## Support

For theme support and customization:
- Email: support@themetafuture.com
- Documentation: Available in theme files
- Updates: Regular updates for WordPress compatibility

## License

This theme is licensed under GPL v2 or later.

## Changelog

### Version 1.0.0
- Initial release
- Homepage template
- Service pages
- Blog functionality
- Contact forms
- Custom post types
- Theme customizer integration