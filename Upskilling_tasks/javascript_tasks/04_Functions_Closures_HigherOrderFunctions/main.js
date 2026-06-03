
const eventsStore = [
    { id: 1, name: "Music Festival in Central Square", date: "2026-07-15", category: "music", capacity: 50, tracker: null },
    { id: 2, name: "Baking Bread Workshop", date: "2026-06-25", category: "baking", capacity: 10, tracker: null },
    { id: 3, name: "Yoga Camp (Sunrise Flow)", date: "2026-08-10", category: "wellness", capacity: 20, tracker: null }
];

let activeFilter = 'all';

const eventDashboard = document.getElementById('event-dashboard');

function createRegistrationTracker(initialValue = 0) {
    let registrationCount = initialValue;

    return {
        register: function() {
            registrationCount++;
            return registrationCount;
        },
        getCount: function() {
            return registrationCount;
        }
    };
}

eventsStore.forEach(event => {
    let initialCount = event.id === 1 ? 48 : (event.id === 2 ? 8 : 10);
    event.tracker = createRegistrationTracker(initialCount);
});

function addEvent(name, date, category, capacity) {
    const newId = eventsStore.length + 1;
    const newEvent = {
        id: newId,
        name: name,
        date: date,
        category: category,
        capacity: Number(capacity),
        tracker: createRegistrationTracker(0)
    };
    eventsStore.push(newEvent);
    console.log(`[addEvent] Created event: "${name}" in category "${category}"`);
}

function filterEventsByCategory(category) {
    if (category === 'all') {
        return eventsStore;
    }
    return eventsStore.filter(event => event.category === category);
}

function registerUser(userName, eventId, onSuccess, onFailure) {
    const event = eventsStore.find(e => e.id === eventId);

    if (!event) {
        onFailure("Registration Failed: Event not found!");
        return;
    }

    if (!userName.trim()) {
        onFailure("Registration Failed: Name cannot be blank!");
        return;
    }

    const currentlyRegistered = event.tracker.getCount();

    if (currentlyRegistered >= event.capacity) {
        onFailure(`Registration Failed: "${event.name}" is completely booked!`);
    } else {
        event.tracker.register();
        onSuccess(`Congratulations ${userName}! Registered successfully for ${event.name}.`);
    }
}

function renderEvents() {
    eventDashboard.innerHTML = '';
    const filteredList = filterEventsByCategory(activeFilter);

    if (filteredList.length === 0) {
        eventDashboard.innerHTML = `<p style="color: var(--text-muted); font-style: italic;">No events found in this category.</p>`;
        return;
    }

    filteredList.forEach(event => {
        const filled = event.tracker.getCount();
        const available = event.capacity - filled;

        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-header">
                <span class="event-title">${event.name}</span>
                <span class="event-category-badge">${event.category}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted)">
                📅 Date: ${event.date} | Capacity: ${filled}/${event.capacity} seats filled (${available} left)
            </div>
            <div class="register-form-box">
                <input type="text" placeholder="Enter attendee name" id="user-input-${event.id}" class="input-text">
                <button class="btn btn-sm" onclick="handleRegistrationSubmit(${event.id})">Register</button>
            </div>
        `;
        eventDashboard.appendChild(card);
    });
}

function handleRegistrationSubmit(eventId) {
    const nameInput = document.getElementById(`user-input-${eventId}`);
    const name = nameInput.value;

    registerUser(
        name,
        eventId,
        (successMsg) => {
            console.log(`[Success Callback] ${successMsg}`);
            alert(successMsg);
            nameInput.value = '';
            renderEvents();
        },
        (errorMsg) => {
            console.error(`[Failure Callback] ${errorMsg}`);
            alert(errorMsg);
        }
    );
}

function setCategoryFilter(category, tabElement) {
    activeFilter = category;

    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    tabElement.classList.add('active');

    console.log(`[Category Filter Changed] Category: ${category}`);
    renderEvents();
}

function submitNewEvent() {
    const name = document.getElementById('new-name').value;
    const date = document.getElementById('new-date').value;
    const category = document.getElementById('new-category').value;
    const capacity = document.getElementById('new-capacity').value;

    if (!name || !date || !capacity) {
        alert("Please fill all the event configuration fields!");
        return;
    }

    addEvent(name, date, category, capacity);

    document.getElementById('new-name').value = '';
    document.getElementById('new-date').value = '';
    document.getElementById('new-capacity').value = '';

    renderEvents();
}

renderEvents();
