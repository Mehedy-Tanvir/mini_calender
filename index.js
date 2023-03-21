const monthEl = document.querySelector('.container-month');
const weekdayEl = document.querySelector('.weekday');
const dayEl = document.querySelector('.day');
const yearEl = document.querySelector('.year');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const monthInx = new Date().getMonth();
const weekdayInx = new Date().getDay();
const currentDate = new Date().getDate();
const year = new Date().getFullYear();

monthEl.innerText = months[monthInx];
weekdayEl.innerText = weekdays[weekdayInx];
dayEl.innerText = currentDate;
yearEl.innerText = year;
