const { DateTime } = require("luxon");
const slugify = require("slugify");
const Image = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItTOC = require("markdown-it-toc-done-right");

module.exports = function(eleventyConfig) {
  // Date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat("dd LLL yyyy");
  });

  // Slug filter
  eleventyConfig.addFilter("slug", (input) => {
    return slugify(input, { lower: true, strict: true });
  });

  // YouTube shortcode
  eleventyConfig.addShortcode("youtube", (id) => {
    return `<div class="video-container">
              <iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>
            </div>`;
  });

  // Image shortcode
  eleventyConfig.addShortcode("image", async (src, alt, sizes = "100vw") => {
    let metadata = await Image(src, {
      widths: [300, 600, 900],
      formats: ["jpeg"],
      outputDir: "docs/assets/img/", // Output images to docs/assets/img
      urlPath: "/assets/img/"
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async"
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Markdown configuration
  let markdownLib = markdownIt({ html: true })
    .use(markdownItAnchor)
    .use(markdownItTOC);
  eleventyConfig.setLibrary("md", markdownLib);

  // Passthrough copy for assets and images
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Ensure JS files are copied to the output directory
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/css");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    passthroughFileCopy: true
  };
};