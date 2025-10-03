# tbbsite
personal academic webpage

made with eleventy 

## Project Structure

```
src/
├── _includes/
│   └── layouts/
│       ├── base.njk         # Main layout template
│       └── consulting.njk   # Standalone consulting page layout
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── script.js       # JavaScript for random images/videos
│   └── img/
│       ├── backgrounds/    # Header background images
│       └── [other images]
├── index.md                # Homepage content
├── consulting.md           # Consulting page content
└── [other content files]

docs/                       # Build output directory (GitHub Pages)
.eleventy.js               # Eleventy configuration
package.json               # Dependencies and build scripts
```

## Key Files & Responsibilities

- **base.njk**: Main layout template with navigation, header with random background, profile section, and footer
- **consulting.njk**: Standalone layout for consulting page (simpler, no navigation)
- **style.css**: All styles using blue color scheme (#1a365d, #0f2a44, #2c5282)
- **script.js**: Handles random background image selection and random dance video display
- **eleventy.js**: Build configuration, shortcodes, image processing, passthrough copying

## Content Organization

### Homepage (index.md)
- Two-column layout: main content (left) and "About Now" sidebar (right)
- Sections: About Me, Research, Teaching, Dance, CV
- Random dance video container populated by JavaScript
- Uses base.njk layout

### Consulting Page (consulting.md)
- Single-column layout using consulting.njk
- Standalone design without main site navigation
- Clean, professional styling

## Styling Conventions

### Color Scheme
- Primary background: #1a365d (blue)
- Secondary background: #0f2a44 (darker blue)
- Footer: #2c5282 (medium blue)
- Text: white (#fff)

### Layout Patterns
- Two-column main layout (48% width each)
- Responsive design with mobile breakpoints at 768px
- Section headers: 2.5em with white underline
- Consistent 20px padding on sections

### Typography
- Headers: 'Merriweather', serif
- Body: 'Roboto', sans-serif
- Section paragraphs: 1.25em font size
- Links: white with underline, hover to #ddd

## JavaScript Functionality

### Random Background Images
- 25 background images in `/assets/img/backgrounds/`
- Applied to header element on page load
- Images are JPG format (mix of caps/lowercase extensions)

### Random Dance Videos
- 7 embedded videos (YouTube + Vimeo)
- Displays one random video in `#random-dance-video-container`
- Includes iframe and description text

## Build Process

### Eleventy Configuration
- Input: `src/` directory
- Output: `docs/` directory (for GitHub Pages)
- Processes Markdown with anchor links and TOC
- Image optimization to multiple widths (300, 600, 900px)
- Passthrough copy for all assets

### Shortcodes Available
- `{% youtube "id" %}`: Embed YouTube videos
- `{% image "src", "alt", "sizes" %}`: Optimized responsive images

## Development Notes

### Mobile Responsiveness
- Single column layout on mobile
- Reduced font sizes and padding
- Profile header stacks vertically
- Navigation becomes vertical

### Accessibility Features
- Semantic HTML with proper roles
- Focus outlines for keyboard navigation
- Alt text for images
- Proper heading hierarchy

### Performance
- Image optimization through @11ty/eleventy-img
- Font loading from Google Fonts
- Minimal JavaScript footprint

## Common Patterns

### Adding New Sections
1. Add section with class `section-[name]` in content files
2. Style in CSS with consistent header patterns
3. Use 20px padding and margin conventions

### Adding New Pages
1. Create `.md` file in `src/`
2. Choose appropriate layout (base.njk or consulting.njk)
3. Add navigation links if using base layout

### Adding New Videos/Images
- Videos: Add to `danceVideos` array in script.js
- Background images: Add filename to `images` array in script.js
- Other images: Place in appropriate `/assets/img/` subdirectory

## Dependencies
- Eleventy static site generator
- Luxon for date handling
- @11ty/eleventy-img for image processing
- markdown-it plugins for enhanced Markdown
- Font Awesome for icons
- Google Fonts (Roboto, Merriweather)

## Analytics
- GoatCounter analytics integrated in base template
- Structured data (JSON-LD) for search engines
