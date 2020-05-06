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

## Module 6: Handling Events<br>Part A - Event Handler

---

# Events

- events are interactions with our page
- often initiated by the user
- we can't predict when they will happen

---

# Event Handlers

- JavaScript code that runs when an event occurs
- written as a function
- this function is passed to a method

---

# Events and DOM Nodes

- every DOM Element node can have events associated with it
- use `.addEventListener()`
- first argument is the event name such as `'click'`
- second argument is a callback function (the event handler)

```text
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button clicked.');
});
```

---

## Deleting an Event Handler

- use a named callback function
- this provides a function reference that we can pass to `.removeEventListener()`

```text
const button = document.querySelector('button');
function once() {
  alert('Done.');
  button.removeEventListener('click', once);
}
button.addEventListener('click', once);
```

---

<!--
_class: lead
_footer: ""
_paginate: false
-->

# ☀
