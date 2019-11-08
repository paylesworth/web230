---
marp: true
theme: gaia
footer: 'WEB230: Chapter 1: Addendum'
paginate: true
author: 'Phil Aylesworth'
date: '2019-10-02'
---

<!--
_class: invert lead
_paginate: false
_footer: ""
-->

# WEB230: JavaScript 1

## Chapter 1: Addendum

---

## Strings Escaping

- some special characters need a backslash
  - newline is "\\n", tab is "\\t"

```text
"This is the first line\nAnd this is the second"
```

will result in:

```text
This is the first line
And this is the second
```

---

## Strings Escaping Continued …

- if you need to display a special character use "\\"

```text
"A newline character is written like \"\\n\"."
```

will result in:

```text
A newline character is written like "\n".
```

---

## Template Literals

- Backtick-quoted strings, usually called _template literals_, can do more than single or double quoted strings:
  - span lines
  - embed other values

```text
`Strings can
now span
lines`
```

---

## Template Literals Continued …

- an expression inside `${}` will be evaluated, converted to a string, and included at that position

```javascript
let number = 100;
console.log(`half of ${number} is ${number / 2}`);
```

displays:

```text
half of 100 is 50
```

---

<!--
_class: lead
_footer: ""
_paginate: false
-->

# ☀
