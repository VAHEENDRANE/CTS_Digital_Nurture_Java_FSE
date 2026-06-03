
const initialSeeds = [
    { name: "Community Music Festival", date: "2026-07-15", category: "Music" },
    { name: "Baking Workshop", date: "2026-06-25", category: "Baking" }
];

function addEventToDOM(eventName, eventDate, eventCategory) {
    const gridContainer = document.querySelector('#dynamic-events-grid');

    if (!gridContainer) {
        console.error("Error: Element with selector '#dynamic-events-grid' not found.");
        return;
    }

    console.log(`[DOM Manipulation] Adding card: "${eventName}"`);

    const cardDiv = document.createElement('div');
    cardDiv.className = 'dom-event-card';

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'dom-card-details';

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = eventName;

    const cardDate = document.createElement('p');
    cardDate.textContent = `📅 Date: ${eventDate}`;

    detailsDiv.appendChild(cardTitle);
    detailsDiv.appendChild(cardDate);

    const categoryBadge = document.createElement('span');
    categoryBadge.className = 'dom-category-badge';
    categoryBadge.textContent = eventCategory;

    cardDiv.appendChild(detailsDiv);
    cardDiv.appendChild(categoryBadge);

    gridContainer.appendChild(cardDiv);

    console.log(`[DOM Manipulation] Successfully appended node:`, cardDiv);
}

function handleDOMSubmit() {
    const nameInput = document.querySelector('#dom-event-name');
    const dateInput = document.querySelector('#dom-event-date');
    const catSelect = document.querySelector('#dom-event-cat');

    const name = nameInput.value;
    const date = dateInput.value;
    const category = catSelect.value;

    if (!name || !date) {
        alert("Please complete the Name and Date fields!");
        return;
    }

    addEventToDOM(name, date, category);

    nameInput.value = '';
    dateInput.value = '';
}

function seedInitialData() {
    console.log("Seeding initial events into DOM grid...");
    initialSeeds.forEach(item => {
        addEventToDOM(item.name, item.date, item.category);
    });
}

seedInitialData();
