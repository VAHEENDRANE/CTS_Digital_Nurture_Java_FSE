
const eventsDatabase = [
    { id: 1, name: "Jazz Music Festival", date: "2026-07-15", category: "Music" },
    { id: 2, name: "Baking Workshop (Sourdough)", date: "2026-06-25", category: "Baking" },
    { id: 3, name: "Yoga Camp (Vinyasa Flow)", date: "2026-08-10", category: "Wellness" },
    { id: 4, name: "Coding Bootcamp (JS Basics)", date: "2026-08-01", category: "Tech" },
    { id: 5, name: "Charity Run 5k", date: "2026-09-12", category: "Wellness" }
];

const clickableGrid = document.getElementById('clickable-events-grid');
const keyInput = document.getElementById('interactive-key-input');
const categorySelector = document.getElementById('event-cat-select');
const detailOverlay = document.getElementById('detail-overlay');

const modalName = document.getElementById('modal-event-name');
const modalDate = document.getElementById('modal-event-date');
const modalCat = document.getElementById('modal-event-cat');

function drawEventGrid(filterCategory = "All") {
    clickableGrid.innerHTML = '';

    const filtered = filterCategory === "All"
        ? eventsDatabase
        : eventsDatabase.filter(e => e.category === filterCategory);

    filtered.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-click-card';

        card.innerHTML = `
            <div>
                <strong style="display:block; font-size:1.05rem;">${event.name}</strong>
                <span style="font-size:0.8rem; color:var(--text-muted);">📅 Date: ${event.date}</span>
            </div>
            <span class="category-badge">${event.category}</span>
        `;

        card.onclick = function() {
            openEventModal(event);
        };

        clickableGrid.appendChild(card);
    });
}

function handleCategoryChange() {
    const selectedCategory = categorySelector.value;
    console.log(`[onchange event] Dropdown changed to category: "${selectedCategory}"`);
    drawEventGrid(selectedCategory);
}

function openEventModal(eventObj) {
    console.log(`[onclick event] Opened details modal for event ID: ${eventObj.id} ("${eventObj.name}")`);

    modalName.textContent = eventObj.name;
    modalDate.textContent = eventObj.date;
    modalCat.textContent = eventObj.category;

    detailOverlay.style.display = 'flex';
}

function closeEventModal() {
    console.log(`[onclick event] Closing details modal window.`);
    detailOverlay.style.display = 'none';
}


keyInput.onkeydown = function(keyboardEvent) {
    console.log(`[keydown event] Input character: "${keyboardEvent.key}" (Key Code: ${keyboardEvent.code})`);
};

window.addEventListener('keydown', function(keyboardEvent) {
    if (detailOverlay.style.display === 'flex') {
        if (keyboardEvent.key === 'Escape') {
            console.log(`[keydown event] Global Escape key captured. Dismissing details modal overlay.`);
            closeEventModal();
        }
    }
});

drawEventGrid();
