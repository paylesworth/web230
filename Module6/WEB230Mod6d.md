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

## Module 6: Handling Events<br>Part C - Delegation

---

# Propagation

- if an event occurs on a child element it will trigger the event handler on the parent element
- if both have handlers the more specific one runs first
- `event.stopPropogation()` method on the event object can stop this

---

# Delegation

- an event handler can be placed on the parent element to handle the events on child elements

---

## `target` Property

- most events have an `event.target` property
- this is the element that the event occurred on
- often used to delegate event handling to parent element

---

# Default Actions

- some element have default actions
  - such as a form being submitted to a server or a link being followed
- the event handler runs before the default action
- `event.preventDefault()` method can stop the default action

---

# Summary

- events _propagate_ to their parent elements
  - `event.stopPropagation()`
- some elements have default actions
  - `event.preventDefault()`

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
