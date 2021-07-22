'use strict';

const monthNames = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//get the today date
var todayDate = new Date();
var todayDay = todayDate.getDate();
var todayMonth = todayDate.getMonth();
var todayYear = todayDate.getFullYear();
var today = todayYear + "-" + todayMonth + "-" + todayDay;

//get the current date
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

prevMonthDOM.addEventListener('click', () => goToPrevMonth());
nextMonthDOM.addEventListener('click', () => goToNextMonth());

//events variables
var eventsNotes = new Array();
var eventNote = {};

const form = document.querySelector('.form');
let eventsDay = document.getElementById('eventsDay');

var dateSelected;
