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

## Module 6: Handling Events<br>Part D - Timeout

---

# Setting Timers

- `setTimeout` to run a function after an amount of time
- schedules a function to be called in a specified amount of time
- `clearTimeout` can be used to cancel it
- `setInterval` and `clearInterval` is similar but repeats every specified time interval

---

# Setting Timers Continued …

```text
const button = document.querySelector('button');
const list = document.querySelector('ul');
let interval;
button.addEventListener('click', function(event){
  if(interval) {
    clearInterval(interval);
  } else {
    interval = setInterval(function(){
      let item = document.createElement('li');
      item.textContent = 'New item';
      list.appendChild(item);
    },1000);
  }
});
```

---

<!--
_class: lead
_footer: ""
_paginate: false
-->

# ☀
