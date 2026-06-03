
const asyncFeed = document.getElementById('async-feed');
const spinner = document.getElementById('loading-spinner');

const backupLocalDataset = [
    { id: 991, name: "Backup Acoustic Music Festival", date: "2026-07-15", category: "Music", capacity: 150 },
    { id: 992, name: "Backup Baking Masterclass", date: "2026-06-25", category: "Baking", capacity: 15 },
    { id: 993, name: "Backup Sunset Yoga flow", date: "2026-08-10", category: "Wellness", capacity: 40 }
];

function simulateNetworkDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleLoadingSpinner(show) {
    if (show) {
        spinner.style.display = 'block';
        asyncFeed.style.opacity = '0.3';
    } else {
        spinner.style.display = 'none';
        asyncFeed.style.opacity = '1';
    }
}

function clearFeed() {
    console.log("Feed cleared.");
    asyncFeed.innerHTML = `
        <p style="text-align: center; color: var(--text-muted); font-style: italic;">
            Click one of the fetch options to query the mock API database.
        </p>
    `;
}

function renderFetchedEvents(eventsArray, loadType) {
    asyncFeed.innerHTML = '';

    const title = document.createElement('h3');
    title.style.fontSize = '1.05rem';
    title.style.marginBottom = '0.75rem';
    title.style.color = '#a5b4fc';
    title.textContent = `Queried using: ${loadType}`;
    asyncFeed.appendChild(title);

    eventsArray.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'async-event-card';
        card.innerHTML = `
            <div>
                <strong style="display:block; font-size:1.1rem;">${ev.name}</strong>
                <span style="font-size:0.85rem; color:var(--text-muted);">📅 Date: ${ev.date} | Limit: ${ev.capacity} seats</span>
            </div>
            <span class="category-pill">${ev.category}</span>
        `;
        asyncFeed.appendChild(card);
    });
}

function fetchEventsWithThen() {
    console.log("[Promise Method] Starting fetch routine...");
    clearFeed();
    toggleLoadingSpinner(true);

    simulateNetworkDelay(1500)
        .then(() => {
            return fetch('events_mock.json');
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP network error: status code ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("[Promise Method] Success! Data retrieved successfully via Promise chain:");
            console.log(data);
            toggleLoadingSpinner(false);
            renderFetchedEvents(data, "Promise (.then)");
        })
        .catch(err => {
            console.warn("[Promise Method] Catch block caught exception:", err.message);
            console.log("[Promise Method] Fetch failed. Reverting to backup local dataset.");

            toggleLoadingSpinner(false);

            renderFetchedEvents(backupLocalDataset, "Promise (.then) - [LOCAL BACKUP DATA DUE TO CORS]");
        });
}

async function fetchEventsWithAsyncAwait() {
    console.log("[Async/Await Method] Starting fetch routine...");
    clearFeed();
    toggleLoadingSpinner(true);

    try {
        await simulateNetworkDelay(1500);

        const response = await fetch('events_mock.json');

        if (!response.ok) {
            throw new Error(`HTTP network error: status code ${response.status}`);
        }

        const data = await response.json();

        console.log("[Async/Await Method] Success! Data parsed:");
        console.log(data);

        toggleLoadingSpinner(false);
        renderFetchedEvents(data, "Async / Await");

    } catch (err) {
        console.warn("[Async/Await Method] Try-catch block caught exception:", err.message);
        console.log("[Async/Await Method] Fetch failed. Loading backup local dataset.");

        toggleLoadingSpinner(false);
        renderFetchedEvents(backupLocalDataset, "Async / Await - [LOCAL BACKUP DATA DUE TO CORS]");
    }
}
