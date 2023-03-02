// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
console.log("Javascript works!!")
var saveButtonEl1 = $("#hour-9").children("button")
var saveButtonEl2 = $("#hour-10").children("button")
var saveButtonEl3 = $("#hour-11").children("button")
var saveButtonEl4 = $("#hour-12").children("button")
var saveButtonEl5 = $("#hour-1").children("button")
var saveButtonEl6 = $("#hour-2").children("button")
var saveButtonEl7 = $("#hour-3").children("button")
var saveButtonEl8 = $("#hour-4").children("button")
var saveButtonEl9 = $("#hour-5").children("button")
var textArea9 = $("#text-9")
var textArea10 = $("#text-10")
var textArea11 = $("#text-11")
var textArea12 = $("#text-12")
var textArea1 = $("#text-1")
var textArea2 = $("#text-2")
var textArea3 = $("#text-3")
var textArea4 = $("#text-4")
var textArea5 = $("#text-5")

$(function () {
  jQuery(document).ready(function($) {
    alert("js is working");
    });

  saveButtonEl1.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-9", textArea9.val())
  });
  saveButtonEl2.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-10", textArea10.val())
  });
  saveButtonEl3.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-11", textArea11.val())
    });
  saveButtonEl4.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-12", textArea12.val())
    });
  saveButtonEl5.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-1", textArea1.val())
    });
  saveButtonEl6.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-2", textArea2.val())
    });
  saveButtonEl7.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-3", textArea3.val())
    });
  saveButtonEl8.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-4", textArea4.val())
    });
  saveButtonEl9.on("click", function () {
    console.log("Saved!!")
    localStorage.setItem("text-5", textArea5.val())
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