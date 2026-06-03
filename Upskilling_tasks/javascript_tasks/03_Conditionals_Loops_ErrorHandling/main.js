
const communityEvents = [
    { id: 1, name: "Community Music Festival", date: "2026-07-15", totalSeats: 100, registered: 95 },
    { id: 2, name: "Baking Workshop (Sourdough)", date: "2026-06-20", totalSeats: 15, registered: 15 },
    { id: 3, name: "Yoga Camp in the Park", date: "2025-05-10", totalSeats: 40, registered: 20 },
    { id: 4, name: "Coding Bootcamp: JS Basics", date: "2026-08-01", totalSeats: 30, registered: 24 },
    { id: 5, name: "Charity Run (5k & 10k)", date: "2026-09-12", totalSeats: 200, registered: 120 }
];

const eventListContainer = document.getElementById('event-list-container');
const noticeBanner = document.getElementById('notice-banner');

function renderDashboard() {
    eventListContainer.innerHTML = '';
    const today = new Date("2026-06-03");

    communityEvents.forEach((event) => {
        const eventDateObj = new Date(event.date);
        const seatsLeft = event.totalSeats - event.registered;

        let statusBadge = '';
        let buttonState = '';

        if (eventDateObj < today) {
            statusBadge = `<span class="badge badge-past">Past Event</span>`;
            buttonState = 'class="btn btn-sm btn-disabled" disabled';
        } else if (seatsLeft <= 0) {
            statusBadge = `<span class="badge badge-full">Fully Booked</span>`;
            buttonState = 'class="btn btn-sm btn-disabled" disabled';
        } else {
            statusBadge = `<span class="badge badge-open">Open (${seatsLeft} left)</span>`;
            buttonState = `class="btn btn-sm" onclick="attemptRegistration(${event.id})"`;
        }

        const rowHTML = `
            <div class="event-row">
                <div class="event-info">
                    <span class="event-name">${event.name}</span>
                    <span class="event-time-seats">📅 ${event.date} | Capacity: ${event.registered}/${event.totalSeats} seats filled</span>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    ${statusBadge}
                    <button ${buttonState}>Register</button>
                </div>
            </div>
        `;

        eventListContainer.innerHTML += rowHTML;
    });
}

function attemptRegistration(eventId) {
    noticeBanner.style.display = 'none';
    noticeBanner.className = 'notification-area';

    const event = communityEvents.find(e => e.id === eventId);

    if (!event) {
        console.log(`Error: Event ID ${eventId} not found.`);
        return;
    }

    console.log(`Attempting registration for "${event.name}"...`);

    try {
        const today = new Date("2026-06-03");
        const eventDateObj = new Date(event.date);
        const seatsLeft = event.totalSeats - event.registered;

        if (eventDateObj < today) {
            throw new Error(`Cannot register. "${event.name}" occurred in the past on ${event.date}.`);
        }

        if (seatsLeft <= 0) {
            throw new Error(`Registration failed. "${event.name}" is completely full!`);
        }

        event.registered++;
        console.log(`Success: User registered for "${event.name}".`);

        noticeBanner.textContent = `✓ Registration successful for ${event.name}!`;
        noticeBanner.classList.add('success');
        noticeBanner.style.display = 'flex';

    } catch (error) {
        console.log(`[CATCH] Registration Error occurred: ${error.message}`);

        noticeBanner.textContent = `⚠️ Error: ${error.message}`;
        noticeBanner.style.display = 'flex';

    } finally {
        console.log(`Registration attempt finalized for event ID: ${eventId}. Re-rendering UI.`);
        renderDashboard();
    }
}

renderDashboard();
