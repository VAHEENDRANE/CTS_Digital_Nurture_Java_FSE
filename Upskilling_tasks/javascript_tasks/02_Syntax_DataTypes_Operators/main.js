
const eventName = "Coding Bootcamp: Intro to JavaScript";
const eventDate = "October 24, 2026";

let seatsAvailable = 25;

const eventDetailsUi = document.getElementById('event-details-ui');
const seatsDisplay = document.getElementById('seats-display');
const outputBox = document.getElementById('template-literal-output');

function initializeUI() {
    eventDetailsUi.innerHTML = `
        <h2 class="event-title">${eventName}</h2>
        <p class="event-meta">📅 Date: ${eventDate}</p>
    `;

    seatsDisplay.textContent = seatsAvailable;

    updatePortalStatus("Initial status loaded.");
}

function updatePortalStatus(actionMessage) {
    const statusMessage = `Status update: [${actionMessage}] Event: "${eventName}" scheduled on ${eventDate} currently has ${seatsAvailable} seats remaining.`;

    outputBox.textContent = statusMessage;

    console.log(statusMessage);
}

function reserveSeat() {
    if (seatsAvailable > 0) {
        seatsAvailable--;

        seatsDisplay.textContent = seatsAvailable;
        updatePortalStatus("Seat Reserved! (--)");
    } else {
        console.log("Cannot reserve: Event is fully booked! 0 seats remaining.");
        alert("Sorry, no more seats available!");
    }
}

function releaseSeat() {
    if (seatsAvailable < 30) {
        seatsAvailable++;

        seatsDisplay.textContent = seatsAvailable;
        updatePortalStatus("Seat Released! (++)");
    } else {
        console.log("Cannot release: Seats have reached maximum capacity (30).");
        alert("Maximum seat limit reached!");
    }
}

initializeUI();
