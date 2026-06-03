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

// Event List

const events = [

    {
        name: "Music Festival",
        seats: 50,
        upcoming: true
    },

    {
        name: "Food Carnival",
        seats: 0,
        upcoming: true
    },

    {
        name: "Sports Meet",
        seats: 20,
        upcoming: false
    }

];


// Display Valid Events

events.forEach(function(event) {

    if (event.upcoming && event.seats > 0) {

        console.log(
            `${event.name} is available for registration`
        );
    }
    else {

        console.log(
            `${event.name} is not available`
        );
    }
});


// Registration Logic

try {

    let selectedEvent = events[0];

    if (selectedEvent.seats <= 0) {

        throw new Error(
            "No seats available"
        );
    }

    selectedEvent.seats--;

    console.log(
        `Registration successful for ${selectedEvent.name}`
    );

}
catch(error) {

    console.log(
        "Registration Error: " + error.message
    );
}