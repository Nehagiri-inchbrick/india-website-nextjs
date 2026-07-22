import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../../blog-detail.html');
const outPath = path.resolve(__dirname, '../lib/html-bodies/blog-detail.js');

const raw = fs.readFileSync(htmlPath, 'utf8');
const start = raw.indexOf('<article class="bd-page">');
const end = raw.indexOf('</article>', start);
if (start < 0 || end < 0) throw new Error('Article block not found in blog-detail.html');

let body = raw.slice(start, end + '</article>'.length).trim();
body = body
  .replace(/href="blog\.html"/g, 'href="/blog"')
  .replace(/href="listings\.html"/g, 'href="/listings"')
  .replace(/href="contact\.html#contactForm"/g, 'href="/contact#contactForm"')
  .replace(
    /<form class="bd-newsletter-form" action="[^"]*">/,
    '<form class="bd-newsletter-form" id="bdNewsletter">'
  );

const relatedIds = [2, 3, 4];
let relatedIndex = 0;
body = body.replace(/href="blog-detail\.html"/g, () => {
  const id = relatedIds[relatedIndex] ?? 1;
  relatedIndex += 1;
  return `href="/blog-detail?id=${id}"`;
});

const content =
  'export const bodyClass = "blog-detail-page";\n' +
  'export const html = `\n  <div id="blogDetailRoot">\n' +
  body.replace(/`/g, '\\`').replace(/\$/g, '\\$') +
  '\n  </div>\n`;\n';

fs.writeFileSync(outPath, content);
console.log('Synced blog-detail HTML ->', outPath);
