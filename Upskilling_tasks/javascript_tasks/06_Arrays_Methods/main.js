
const portalEvents = [
    { name: "Music Festival (Jazz Night)", date: "2026-07-15", category: "Music", seats: 150 },
    { name: "Sourdough Baking Class", date: "2026-06-25", category: "Baking", seats: 15 },
    { name: "Yoga Camp (Vinyasa Flow)", date: "2026-08-10", category: "Wellness", seats: 30 },
    { name: "Coding Bootcamp: Javascript Basics", date: "2026-08-01", category: "Tech", seats: 45 }
];

let currentCategoryFilter = "All";

const eventsContainer = document.getElementById('events-container');

function renderEventsList() {
    eventsContainer.innerHTML = '';
    console.log(`[Render] Active category filter: "${currentCategoryFilter}"`);

    const filteredEvents = currentCategoryFilter === "All"
        ? portalEvents
        : portalEvents.filter(event => event.category === currentCategoryFilter);

    console.log(`[filter()] Output items count: ${filteredEvents.length}`);

    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = `<p style="color: var(--text-muted); font-style: italic; padding: 1rem 0;">No events in this category yet. Add one above!</p>`;
        return;
    }

    const cardHtmlArray = filteredEvents.map((event) => {
        return `
            <div class="event-card">
                <div class="event-details">
                    <span class="event-name">${event.name}</span>
                    <span class="event-meta">📅 Date: ${event.date} | Seats Available: ${event.seats}</span>
                </div>
                <div>
                    <span class="category-pill">${event.category}</span>
                </div>
            </div>
        `;
    });

    eventsContainer.innerHTML = cardHtmlArray.join('');
}

function submitNewEvent() {
    const name = document.getElementById('event-name-input').value;
    const date = document.getElementById('event-date-input').value;
    const category = document.getElementById('event-cat-input').value;
    const seats = document.getElementById('event-seats-input').value;

    if (!name || !date || !seats) {
        alert("Please complete all the input fields!");
        return;
    }

    const newEvent = {
        name: name,
        date: date,
        category: category,
        seats: Number(seats)
    };

    portalEvents.push(newEvent);

    console.log(`[push()] Appended new event to array list:`);
    console.log(newEvent);
    console.log(`Updated portalEvents length: ${portalEvents.length}`);

    document.getElementById('event-name-input').value = '';
    document.getElementById('event-date-input').value = '';
    document.getElementById('event-seats-input').value = '';

    renderEventsList();
}

function changeCategoryFilter(category, buttonElement) {
    currentCategoryFilter = category;

    document.querySelectorAll('.filter-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    buttonElement.classList.add('active');

    renderEventsList();
}

renderEventsList();
