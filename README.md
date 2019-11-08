# Slides for WEB230

Slides are written in markdown in Marp format. Notes are process from the same files. Install `node` and [`marp` command line](https://github.com/marp-team/marp-cli). In the folder you are using for presentations, run `npm install` to download the needed modules. Then you can process all slides with:

```text
$ gulp
```

`gulp` will regenerate all HTML files but only process changed PDF files.

To delete all PDF and HTML files:

```text
$ gulp clean
```

## Processing for notes

- All `---` horizontal rules are removed.

- If a slide continues over more than one slide, end a heading with `Continued …` and the heading will be removed from the notes so there is only one.

- All `<br>` tags will be replaced with a space in the notes. If you want to keep it make it a `<br/>` instead.

- The closing "Sun Shine" slide is removed.

## Marp themes

Marp comes with two themes but [you can write your own](https://www.ansiblejunky.com/blog/custom-themes-with-marp/).

## Sunshine Slide

To finish the presentation I like to include a Sunshine Slide. This just let me know I have reached the end without just bumping into a slide that won't change.

Use the following at the end of the slide deck:

```markdown
---

<!--
_class: lead
_footer: ""
_paginate: false
-->

# ☀
```
