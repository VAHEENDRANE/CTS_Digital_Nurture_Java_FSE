
const loader = document.getElementById('post-loader');
const resultBox = document.getElementById('api-result-box');

function sendPostRegistration() {
    const attendeeName = document.getElementById('post-name').value.trim();
    const eventName = document.getElementById('post-event').value;

    if (!attendeeName) {
        alert("Please enter your name!");
        return;
    }

    resultBox.style.display = 'none';
    resultBox.className = 'http-result-box';

    toggleLoader(true);

    console.log(`[HTTP POST] Initiating request to booking database mock...`);

    const bookingPayload = {
        title: "Event Registration Task",
        body: JSON.stringify({
            userName: attendeeName,
            selectedEvent: eventName,
            timestamp: new Date().toISOString()
        }),
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(bookingPayload)
    })
    .then(response => {
        console.log(`[HTTP POST] Server responded with status code: ${response.status}`);

        if (!response.ok) {
            throw new Error(`Server returned HTTP Error: ${response.status} ${response.statusText}`);
        }

        return Promise.all([response.status, response.json()]);
    })
    .then(([status, parsedBody]) => {
        setTimeout(() => {
            toggleLoader(false);
            displayApiResponse(status, parsedBody, true);
        }, 1500);
    })
    .catch(error => {
        console.error(`[HTTP POST] Catch block captured exception:`, error.message);

        setTimeout(() => {
            toggleLoader(false);
            displayApiResponse(0, { error: error.message }, false);
        }, 1500);
    });
}

function toggleLoader(show) {
    if (show) {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
    }
}

function displayApiResponse(statusCode, responseBody, isSuccess) {
    resultBox.style.display = 'block';

    if (isSuccess) {
        resultBox.classList.add('success');
        resultBox.innerHTML = `
            <div style="color: var(--accent); font-weight: bold; margin-bottom: 0.5rem;">✓ HTTP POST SUCCESS (Status: ${statusCode} Created)</div>
            <strong>Headers:</strong> Content-Type: application/json; charset=utf-8<br>
            <strong>Response Body:</strong><br>
            ${JSON.stringify(responseBody, null, 2)}
        `;
        console.log(`[HTTP POST] Success rendered to page UI. Status: ${statusCode}`);
    } else {
        resultBox.classList.add('failure');
        resultBox.innerHTML = `
            <div style="color: var(--accent-danger); font-weight: bold; margin-bottom: 0.5rem;">❌ HTTP POST FAILURE</div>
            <strong>Error Details:</strong><br>
            ${JSON.stringify(responseBody, null, 2)}
        `;
        console.warn(`[HTTP POST] Failure rendered to page UI.`);
    }
}
