# mikhailbasov.github.io

Personal profile of Mikhail Basov, served by GitHub Pages at https://mikhailbasov.github.io/.

Static files only, no build step:

- `index.html`: the English page, with schema.org `ProfilePage` and `Person` data;
- `ru/index.html`: the Russian page, linked to the English one with `hreflang`;
- `style.css` and `site.js`: shared by both pages;
- `llms.txt`: the same facts as plain text for language models;
- `robots.txt` and `sitemap.xml` for crawlers;
- `icon-192.png`, `favicon.ico` and `apple-touch-icon.png`: the photo icon that Google shows next to search results.

When something changes, update both pages and `llms.txt` together, and set the new date in all three, in the JSON-LD `dateModified` and in `sitemap.xml`. Write `dateModified` as a full UTC timestamp such as `2026-10-17T12:52:47Z`: Google's Rich Results Test flags a bare date. Keep the JSON-LD limited to facts that are visible on the page, and leave out the country and time zone. Keep the `google-site-verification` and `msvalidate.01` tags in `index.html`: Search Console and Bing Webmaster Tools check them.
