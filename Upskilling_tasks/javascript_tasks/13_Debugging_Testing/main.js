
console.log("[Diagnostics init] Main debugging script loaded successfully.");

function triggerNormalLog() {
    console.log("Welcome to the Community Portal! This is a standard log message.");
}

function triggerWarningLog() {
    console.warn("Seat warning: Remaining availability is below 10%!");
}

function triggerErrorLog() {
    console.error("Database connection timeout: Unable to synchronize event roster.");
}

function triggerRuntimeException() {
    console.log("Preparing to throw exception...");

    throw new Error("Critical registration crash! Seat limit exceeded constraints.");
}

function triggerBreakpointMath(ticketsToBook) {
    let baseCapacity = 100;
    let registeredSeats = 92;

    console.log(`[Breakpoint math] Calculating capacity. Limit: ${baseCapacity}, Enrolled: ${registeredSeats}, Requesting: ${ticketsToBook}`);

    let finalEnrolled = registeredSeats + ticketsToBook;

    let remainingVacancy = baseCapacity - finalEnrolled;

    document.getElementById('math-display').textContent = `Remaining: ${remainingVacancy} seats`;

    console.log(`[Breakpoint math] Completed calculations. Remaining vacancy: ${remainingVacancy}`);
}
