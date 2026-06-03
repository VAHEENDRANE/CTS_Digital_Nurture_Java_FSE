
function CommunityEvent(name, date, category, capacity, enrolled) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.capacity = capacity;
    this.enrolled = enrolled;
}

CommunityEvent.prototype.checkAvailability = function() {
    const seatsRemaining = this.capacity - this.enrolled;
    console.log(`[Prototype checkAvailability] "${this.name}" has ${seatsRemaining} seats remaining.`);
    return seatsRemaining > 0;
};

const eventsList = [
    new CommunityEvent("Baking Workshop (Sourdough)", "2026-06-25", "Baking", 12, 12),
    new CommunityEvent("Music Festival in Central Square", "2026-07-15", "Music", 50, 45),
    new CommunityEvent("Yoga Camp (Sunrise Flow)", "2026-08-10", "Wellness", 25, 10),
    new CommunityEvent("Coding Bootcamp: JS Basics", "2026-08-01", "Tech", 30, 30),
    new CommunityEvent("Charity Run (5k & 10k)", "2026-09-12", "Wellness", 150, 60)
];

const eventSelector = document.getElementById('event-selector');
const entriesRows = document.getElementById('entries-rows');
const availabilityBanner = document.getElementById('availability-banner');
const availabilityText = document.getElementById('availability-text');

function setupSelector() {
    eventSelector.innerHTML = '';
    eventsList.forEach((ev, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = `${ev.name} (${ev.category})`;
        eventSelector.appendChild(opt);
    });
}

function loadSelectedEventProperties() {
    const selectedIndex = eventSelector.value;
    const eventObj = eventsList[selectedIndex];

    entriesRows.innerHTML = '';

    console.log(`[Object.entries] Enumerating properties of "${eventObj.name}":`);

    const propertyEntries = Object.entries(eventObj);

    console.log(propertyEntries);

    propertyEntries.forEach(([key, val]) => {
        if (typeof val === 'function') return;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="prop-key">${key}</td>
            <td class="prop-val">${val}</td>
        `;
        entriesRows.appendChild(row);
    });

    availabilityText.textContent = "Click button to calculate availability.";
    availabilityBanner.className = "availability-card";
}

function triggerAvailabilityCheck() {
    const selectedIndex = eventSelector.value;
    const eventObj = eventsList[selectedIndex];

    const isOpen = eventObj.checkAvailability();

    if (isOpen) {
        availabilityText.textContent = "Registration Open! Seats are available.";
        availabilityText.style.color = "var(--accent)";
        availabilityBanner.className = "availability-card";
    } else {
        availabilityText.textContent = "Fully Booked! No vacancy remaining.";
        availabilityText.style.color = "var(--accent-danger)";
        availabilityBanner.className = "availability-card unavailable";
    }
}

setupSelector();
loadSelectedEventProperties();
