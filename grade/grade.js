'use strict';

// Calculate the average of an array
const average = function (array) {
  return (
    array
      .map((n) => +n)
      .filter((n) => !Number.isNaN(n))
      .reduce((s, n) => s + n, 0) / array.length
  );
};

// Calculate the letter grade
const letter = function (mark) {
  if (mark >= 80) return 'A';
  else if (mark >= 70) return 'B';
  else if (mark >= 60) return 'C';
  else if (mark >= 50) return 'D';
  else return 'F';
};

// select elements we will need
const aField = document.querySelector('#assignments');
const qField = document.querySelector('#quizzes');
const tField = document.querySelector('#tests');
const gField = document.querySelector('#grade');
const form = document.querySelector('form');

// calculate the grade
const action = function (event) {
  // get the contents of the fields and clean them
  const regex = /[, ]+/g;
  const assignments = aField.value.replace(regex, ', ');
  const quizzes = qField.value.replace(regex, ', ');
  const tests = tField.value.replace(regex, ', ');
  // put the clean values back
  aField.value = assignments;
  qField.value = quizzes;
  tField.value = tests;

  // convert to arrays
  const a = assignments.split(', ');
  const q = quizzes.split(', ');
  const t = tests.split(', ');

  const aAve = average(a);
  const qAve = average(q);
  const tAve = average(t);

  const grade = aAve * 3 + qAve * 2 + tAve * 0.5;

  gField.value = `${grade.toFixed(1)}% (${letter(grade)})`;
  localStorage.grades = JSON.stringify({ a, q, t });
};

// ignore keys that are not valid
const testKey = function (event) {
  // okay if number, period, comma, space, or control key
  if ('0123456789., '.includes(event.key) || event.key.length > 1) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
};

// filter keystrokes
aField.addEventListener('keydown', testKey);
qField.addEventListener('keydown', testKey);
tField.addEventListener('keydown', testKey);

// delegate grade calculation to the form
form.addEventListener('input', action);

// load in localStorage if present
if (localStorage.grades) {
  const { a, q, t } = JSON.parse(localStorage.grades);
  aField.value = a;
  qField.value = q;
  tField.value = t;
}
