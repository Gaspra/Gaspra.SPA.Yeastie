const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const spaDir = path.join(__dirname);
const htmlPath = path.join(spaDir, 'index.html');
const imagePath = path.join(spaDir, 'sourdoughloaf.png');

test('sourdoughloaf.png exists in src/spa', () => {
  assert.ok(fs.existsSync(imagePath), 'sourdoughloaf.png must exist in src/spa');
  const stats = fs.statSync(imagePath);
  assert.ok(stats.size > 0, 'sourdoughloaf.png must not be empty');
});

test('index.html exists and contains valid basic HTML structure', () => {
  assert.ok(fs.existsSync(htmlPath), 'index.html must exist in src/spa');
  const html = fs.readFileSync(htmlPath, 'utf8');
  assert.ok(html.trim().length > 0, 'index.html must not be empty');
  assert.match(html, /<!doctype\s+html>/i, 'HTML must include DOCTYPE');
  assert.match(html, /<html\b[^>]*>/i, 'HTML must include <html> tag');
  assert.match(html, /<head\b[^>]*>/i, 'HTML must include <head> tag');
  assert.match(html, /<body\b[^>]*>/i, 'HTML must include <body> tag');
  assert.match(html, /<meta\s+name=["']viewport["']/i, 'HTML must include viewport meta tag for responsive display');
});

test('index.html includes bakery title "yeastie"', () => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  assert.match(html, /<title>[^<]*yeastie[^<]*<\/title>/i, 'Document title must mention "yeastie"');
  assert.match(html, /<h1\b[^>]*>[^<]*yeastie[^<]*<\/h1>/i, 'Document must have an <h1> heading with "yeastie"');
});

test('index.html includes the sourdough loaf image with proper attributes', () => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  assert.match(html, /<img\b[^>]*src=["'](?:\.\/)?sourdoughloaf\.png["']/i, 'Must have an img tag referencing sourdoughloaf.png');
  assert.match(html, /<img\b[^>]*alt=["'][^"']+["']/i, 'Image must have descriptive alt text');
});

test('index.html styles image to take up at most 60% width and center it with blank background', () => {
  const html = fs.readFileSync(htmlPath, 'utf8');
  // Check blank background
  assert.match(html, /background(?:-color)?\s*:\s*(?:#fff(?:fff)?|white)/i, 'Background should be blank/clean white');
  // Check image max-width about 60%
  assert.match(html, /max-width\s*:\s*60(?:%|vw)/i, 'Image max-width must be 60% or 60vw');
  // Check centering (flex/grid or margin auto)
  const hasCentering = /justify-content\s*:\s*center/i.test(html) ||
                       /align-items\s*:\s*center/i.test(html) ||
                       /margin\s*:\s*0?\s*auto/i.test(html) ||
                       /text-align\s*:\s*center/i.test(html);
  assert.ok(hasCentering, 'Content and image should be centered on the page');
});

test('root index.html provides a redirect to src/spa/ for branch deployment', () => {
  const rootHtmlPath = path.join(spaDir, '..', '..', 'index.html');
  assert.ok(fs.existsSync(rootHtmlPath), 'Root index.html should exist');
  const rootHtml = fs.readFileSync(rootHtmlPath, 'utf8');
  assert.match(rootHtml, /src\/spa\//i, 'Root index.html should link or redirect to src/spa/');
});

