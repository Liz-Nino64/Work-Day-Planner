// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log("Javascript works!!")
var saveButtonEl1 = $("#hour-9")
var saveButtonEl2 = $("#hour-10")
var saveButtonEl3 = $("#hour-11")
var saveButtonEl4 = $("#hour-12")
var saveButtonEl5 = $("#hour-1")
var saveButtonEl6 = $("#hour-2")
var saveButtonEl7 = $("#hour-3")
var saveButtonEl8 = $("#hour-4")
var saveButtonEl9 = $("#hour-5")
var userInputEl = $("#textarea")
var storedInput = localStorage.getItem("textarea")

$(function () {
  jQuery(document).ready(function($) {
    alert("js is working");
    });

  saveButtonEl1.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);

  });
  saveButtonEl2.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  saveButtonEl3.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  saveButtonEl4.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  saveButtonEl5.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  saveButtonEl6.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  saveButtonEl7.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  saveButtonEl8.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  saveButtonEl9.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("textarea", userInputEl);
    });
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});