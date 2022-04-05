// // need to grab current hour from moment.js

var currentDay = document.querySelector("#currentDay")

currentDay.textContent = moment().format('LLLL');

var currentHour = moment().hour();

// created an array for the button ID's
// var hour has to be military time
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var idHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]


var saveBtn = document.querySelector("saveBtn");
console.log(currentHour);

// Creating a 4 loop and if statements to fire 'present' 'past' and 'future' css for coloring

for (var i = 0; i < idHours.length; i++) {
    var textarea = document.getElementById(idHours[i])
    textarea.value = localStorage.getItem(idHours[i])
    if (currentHour === hour[i]) {
        textarea.classList.add("present");
    }
    if (currentHour > hour[i]) {
        textarea.classList.add("past")
    }
    if (currentHour < hour[i]) {
        textarea.classList.add("future")
    }
}
// to save to local storage
var saveBtn = document.querySelectorAll(".saveBtn")

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function () {

        var dataid = this.getAttribute("data-id");
        var textarea = document.getElementById(dataid);
        localStorage.setItem(dataid, textarea.value)
    })

}


