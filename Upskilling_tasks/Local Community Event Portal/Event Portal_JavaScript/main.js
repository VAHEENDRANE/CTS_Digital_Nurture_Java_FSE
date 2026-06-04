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

// ======================================
// Arrays and Methods
// ======================================

let communityEvents = [

    "Music Festival",

    "Food Carnival",

    "Sports Meet"
];


// ======================================
// push()
// ======================================

communityEvents.push(
    "Workshop on Baking"
);

console.log(
    "After Push:"
);

console.log(
    communityEvents
);


// ======================================
// filter()
// ======================================

const musicEvents = [

    {
        name: "Music Festival",
        category: "Music"
    },

    {
        name: "Food Carnival",
        category: "Food"
    },

    {
        name: "Live Concert",
        category: "Music"
    }
];

const filteredMusicEvents =
    musicEvents.filter(

        event =>
            event.category === "Music"
    );

console.log(
    "Music Events:"
);

console.log(
    filteredMusicEvents
);


// ======================================
// map()
// ======================================

const displayCards =
    communityEvents.map(

        event =>
            `Workshop on ${event}`
    );

console.log(
    "Formatted Display Cards:"
);

console.log(
    displayCards
);

// ======================================
// DOM Manipulation
// ======================================

// querySelector()

const eventContainer =
    document.querySelector(
        "#eventContainer"
    );


// createElement()

const eventCard =
    document.createElement(
        "div"
    );

eventCard.innerHTML =
    "<h3>Music Festival</h3><p>Seats Available: 50</p>";


// appendChild()

eventContainer.appendChild(
    eventCard
);


// Update UI

const registerBtn =
    document.querySelector(
        "#registerBtn"
    );

const cancelBtn =
    document.querySelector(
        "#cancelBtn"
    );

const statusMessage =
    document.querySelector(
        "#statusMessage"
    );

registerBtn.onclick =
    function () {

        statusMessage.innerHTML =
            "Registration Successful!";
    };

cancelBtn.onclick =
    function () {

        statusMessage.innerHTML =
            "Registration Cancelled!";
    };

    // ======================================
// Event Handling
// ======================================

// onclick

registerBtn.onclick = function () {

    statusMessage.innerHTML =
        "Registration Successful!";
};


// onchange

const categoryFilter =
    document.querySelector(
        "#categoryFilter"
    );

categoryFilter.onchange =
    function () {

        console.log(
            "Selected Category: " +
            categoryFilter.value
        );
    };


// keydown

const searchBox =
    document.querySelector(
        "#searchBox"
    );

searchBox.onkeydown =
    function (event) {

        console.log(
            "Key Pressed: " +
            event.key
        );
    };

    // ======================================
// Async JS, Promises, Async/Await
// ======================================

// Loading Spinner

console.log(
    "Loading Events..."
);


// Promise using fetch()

fetch(
    "https://jsonplaceholder.typicode.com/users"
)

.then(response => response.json())

.then(data => {

    console.log(
        "Events Loaded Using .then()"
    );

    console.log(data);
})

.catch(error => {

    console.log(
        "Error:",
        error
    );
});


// Async / Await

async function loadEvents() {

    try {

        console.log(
            "Loading Events Using Async/Await..."
        );

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data =
            await response.json();

        console.log(
            "Async/Await Result:"
        );

        console.log(data);

    }

    catch (error) {

        console.log(
            "Async/Await Error:",
            error
        );
    }
}

loadEvents();