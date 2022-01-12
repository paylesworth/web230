const { src, dest, parallel } = require('gulp');
const del = require('del');
const markdownPdf = require('gulp-markdown-pdf');
const deleteLines = require('gulp-rm-lines');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const frontMatter = require('gulp-front-matter');
// const cache = require('gulp-cache');
// const run = require('gulp-run-command').default;
const exec = require('child_process').exec;

// Create PDF Notes for each slide deck
function pdf() {
  return src('WEB*.md')
    .pipe(
      frontMatter({
        property: 'frontMatter',
        remove: true
      })
    )
    .pipe(deleteLines({ filters: [/^---$/] })) // HR's
    .pipe(deleteLines({ filters: [/^#.* Continued …$/] })) // Continued headings with ellipsis
    .pipe(deleteLines({ filters: [/^#.* Continued ...$/] })) // Continued headings
    .pipe(deleteLines({ filters: [/^#.*☀$/] })) // Remove closing sunshine line
    .pipe(replace('<br>', ' ')) // breaks in headings
    .pipe(replace(/^```text/, '```javascript')) // change coding to JS
    .pipe(
      // cache(
      markdownPdf({
        cssPath: './pdf.css',
        paperFormat: 'Letter',
        paperBorder: '0.75in',
        remarkable: { html: true }
      })
      // )
    )
    .pipe(
      rename({
        dirname: '.',
        suffix: 'Notes'
      })
    )
    .pipe(dest('.'));
}

// Run Marp to generate the HTML slide presentations
function marp(cb) {
  exec('marp WEB*.md', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

function clean(cb) {
  del.sync('WEB*.pdf');
  del.sync('WEB*.html');
  // cache.clearAll();
  return cb();
}

//exports.default = parallel(pdf, marp);
exports.default = pdf;
exports.clean = clean;
