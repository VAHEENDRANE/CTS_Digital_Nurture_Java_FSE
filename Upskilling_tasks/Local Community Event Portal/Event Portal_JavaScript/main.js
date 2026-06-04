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

// ======================================
// Functions
// ======================================

function addEvent(name, category) {

    console.log(
        `Event Added: ${name} (${category})`
    );
}

function registerUser(userName, eventName) {

    console.log(
        `${userName} registered for ${eventName}`
    );
}

function filterEventsByCategory(category, callback) {

    const filteredEvents = eventList.filter(
        event => event.category === category
    );

    callback(filteredEvents);
}


// ======================================
// Event Data
// ======================================

const eventList = [

    {
        name: "Music Festival",
        category: "Music"
    },

    {
        name: "Food Carnival",
        category: "Food"
    },

    {
        name: "Sports Meet",
        category: "Sports"
    },

    {
        name: "Workshop on Baking",
        category: "Food"
    }

];


// ======================================
// Closure Example
// ======================================

function registrationTracker(category) {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            `${category} Registrations: ${totalRegistrations}`
        );
    };
}


// ======================================
// Closure Calls
// ======================================

const musicRegistration =
    registrationTracker("Music");

musicRegistration();

musicRegistration();

musicRegistration();


// ======================================
// Callback Example
// ======================================

filterEventsByCategory(

    "Music",

    function (events) {

        console.log(
            "Filtered Events:"
        );

        events.forEach(function (event) {

            console.log(
                event.name
            );

        });
    }
);


// ======================================
// Function Calls
// ======================================

addEvent(
    "Workshop on Baking",
    "Food"
);

registerUser(
    "Vahee",
    "Music Festival"
);

// ======================================
// Event Constructor
// ======================================

function Event(name, category, seats) {

    this.name = name;
    this.category = category;
    this.seats = seats;
}


// ======================================
// Prototype Method
// ======================================

Event.prototype.checkAvailability = function () {

    if (this.seats > 0) {

        console.log(`${this.name} is Available`);

    } else {

        console.log(`${this.name} is Full`);
    }
};


// ======================================
// Create Event Objects
// ======================================

const event1 = new Event(
    "Music Festival",
    "Music",
    50
);

const event2 = new Event(
    "Food Carnival",
    "Food",
    0
);


// ======================================
// Call Prototype Method
// ======================================

event1.checkAvailability();

event2.checkAvailability();


// ======================================
// Object.entries()
// ======================================

console.log("Event Details:");

Object.entries(event1).forEach(

    ([key, value]) => {

        console.log(`${key}: ${value}`);

    }

);