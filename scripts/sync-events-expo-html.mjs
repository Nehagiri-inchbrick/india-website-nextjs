import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../../events-expo.html');
const outPath = path.resolve(__dirname, '../lib/html-bodies/events-expo.js');

const raw = fs.readFileSync(htmlPath, 'utf8');
const start = raw.indexOf('<!-- ═══ ACTIVE EVENT BANNER');
const end = raw.indexOf('<div id="site-footer">');
if (start < 0 || end < 0) throw new Error('HTML markers not found');

let body = raw.slice(start, end).trim();
body = body.replace(/event-detail\.html\?slug=/g, '/event-detail?slug=');

const content =
  'export const bodyClass = "ex-page";\n' +
  'export const html = `\n  ' +
  body.replace(/`/g, '\\`').replace(/\$/g, '\\$') +
  '\n`;\n';

fs.writeFileSync(outPath, content);
console.log('Synced events-expo HTML body ->', outPath);
