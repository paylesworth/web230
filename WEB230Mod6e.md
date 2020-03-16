---
marp: true
theme: gaia
footer: 'Module 6: Handling Events'
paginate: true
Author: Phil Aylesworth
Date: 2018-04-02
Updated for 3rd edition: 2018-11-07
Updated for corrections and more code examples: 2019-11-13
Separated into multiple parts: 2020-03-10
---

<!--
_class: invert lead
_paginate: false
_footer: ""
-->

# WEB230: JavaScript 1

## Module 6: Handling Events<br>Sumary

---

# Summary

- event handlers make it possible to detect and react to external events
- each event has a type - eg. 'click'
- events _propagate_ to their parent elements
  - `event.stopPropagation()`
- some elements have default actions
  - `event.preventDefault()`
- only one piece of JavaScript can run at once

---

# Reference

- [MDN Events](https://developer.mozilla.org/en-US/docs/Web/Events)

---

<!--
_class: lead
_footer: ""
_paginate: false
-->

# ☀
