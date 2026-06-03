console.log("Welcome to the Community Portal");

window.onload = function () {

    alert("Page Fully Loaded");

};


// Event Information

const eventName = "Music Festival";

const eventDate = "15-06-2026";

let availableSeats = 50;


// Template Literal

console.log(
    `Event: ${eventName} | Date: ${eventDate} | Seats: ${availableSeats}`
);


// Registration

availableSeats--;

console.log(
    `After Registration, Available Seats: ${availableSeats}`
);


// Cancellation

availableSeats++;

console.log(
    `After Cancellation, Available Seats: ${availableSeats}`
);