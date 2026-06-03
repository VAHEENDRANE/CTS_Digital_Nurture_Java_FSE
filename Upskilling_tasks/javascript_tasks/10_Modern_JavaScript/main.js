
const globalEventPortal = "Central Community Portal";
let activeEventCount = 0;

console.log(`[ES6 Setup] Portal Name: "${globalEventPortal}" | Count: ${activeEventCount}`);

const defOutput = document.getElementById('def-output');
const destructureOutput = document.getElementById('destructure-output');
const spreadOutput = document.getElementById('spread-output');

function buildEventConfig(name, date = "TBD", category = "General", capacity = 30) {
    console.log(`[buildEventConfig] Called with Category: "${category}", Capacity: ${capacity}`);

    return {
        name,
        date,
        category,
        capacity
    };
}

function runDefaultParametersDemo() {
    const name = document.getElementById('def-name').value;
    const cat = document.getElementById('def-cat').value || undefined;
    const cap = document.getElementById('def-cap').value ? Number(document.getElementById('def-cap').value) : undefined;

    if (!name) {
        alert("Please enter at least an Event Name!");
        return;
    }

    const config = buildEventConfig(name, "2026-07-20", cat, cap);

    console.log("Built config object:", config);

    defOutput.innerHTML = `
        <strong>Created Event Object:</strong><br>
        📛 Name: ${config.name}<br>
        📅 Date: ${config.date}<br>
        🏷️ Category: ${config.category} <em>(default values checked)</em><br>
        👥 Capacity Limit: ${config.capacity} seats
    `;
}

const dummyEvent = {
    title: "Sourdough Baking Workshop",
    scheduleDate: "2026-06-25",
    categoryType: "Baking",
    seatsLimit: 15,
    host: "Baker Bob"
};

function runDestructuringDemo() {
    console.log("[Destructuring Demo] Unpacking object properties...");

    const { title, scheduleDate, categoryType, seatsLimit, host } = dummyEvent;

    console.log(`[Destructured] title: "${title}", host: "${host}"`);

    const categoriesList = ["Music", "Baking", "Wellness", "Tech"];
    const [firstCategory, secondCategory, ...remainingCategories] = categoriesList;
    console.log(`[Destructured Array] 1st: "${firstCategory}", 2nd: "${secondCategory}", Rest:`, remainingCategories);

    destructureOutput.innerHTML = `
        <strong>Destructured Object Properties:</strong><br>
        • Title: ${title}<br>
        • Host: ${host}<br>
        • Date: ${scheduleDate}<br><br>
        <strong>Destructured Array Values:</strong><br>
        • First Element: ${firstCategory}<br>
        • Second Element: ${secondCategory}<br>
        • Rest of categories: ${remainingCategories.join(', ')} (via Rest parameter)
    `;
}

function runSpreadDemo() {
    console.log("[Spread Demo] Merging arrays and copying objects...");

    const musicEvents = ["Jazz Concert", "Rock Band Festival"];
    const wellnessEvents = ["Sunrise Yoga Flow", "5k Charity Run"];

    const mergedEvents = [...musicEvents, ...wellnessEvents, "JS Bootcamp"];

    console.log("Array Spread Output:", mergedEvents);

    const baseEvent = {
        name: "Coding Bootcamp",
        category: "Tech",
        capacity: 40
    };

    const extendedEvent = {
        ...baseEvent,
        capacity: 50,
        registeredCount: 12
    };

    console.log("Object Spread Output (extendedEvent):", extendedEvent);

    spreadOutput.innerHTML = `
        <strong>Spread Operator Merge (Arrays):</strong><br>
        Merged Array list: [${mergedEvents.map(e => `"${e}"`).join(', ')}]<br><br>
        <strong>Spread Operator Clone/Override (Objects):</strong><br>
        Original: { name: "${baseEvent.name}", capacity: ${baseEvent.capacity} }<br>
        Cloned & Updated: { name: "${extendedEvent.name}", capacity: ${extendedEvent.capacity}, registeredCount: ${extendedEvent.registeredCount} }
    `;
}
