# mikhailbasov.github.io

Personal profile of Mikhail Basov, served by GitHub Pages at https://mikhailbasov.github.io/.

Static files only, no build step:

- `index.html`: the page, with schema.org `ProfilePage` and `Person` data;
- `llms.txt`: the same facts as plain text for language models;
- `robots.txt` and `sitemap.xml` for crawlers.

When something changes, update `index.html` and `llms.txt` together, and set the new date in both, in the JSON-LD `dateModified` and in `sitemap.xml`.
