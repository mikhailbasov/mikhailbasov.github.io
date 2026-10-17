# mikhailbasov.github.io

Personal profile of Mikhail Basov, served by GitHub Pages at https://mikhailbasov.github.io/.

Static files only, no build step:

- `index.html`: the English page, with schema.org `ProfilePage` and `Person` data;
- `ru/index.html`: the Russian page, linked to the English one with `hreflang`;
- `style.css` and `site.js`: shared by both pages;
- `llms.txt`: the same facts as plain text for language models;
- `robots.txt` and `sitemap.xml` for crawlers.

When something changes, update both pages and `llms.txt` together, and set the new date in all three, in the JSON-LD `dateModified` and in `sitemap.xml`. Keep the `google-site-verification` and `msvalidate.01` tags in `index.html`: Search Console and Bing Webmaster Tools check them.
