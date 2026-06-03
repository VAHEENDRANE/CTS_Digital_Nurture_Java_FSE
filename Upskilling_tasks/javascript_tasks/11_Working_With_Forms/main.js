
const registrationForm = document.getElementById('registration-form');
const successBanner = document.getElementById('success-banner');

const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorTickets = document.getElementById('error-tickets');
const errorTerms = document.getElementById('error-terms');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("Form submit event captured! Running validations...");

    clearErrors();
    successBanner.style.display = 'none';

    const formElementsCollection = registrationForm.elements;

    const fullNameInput = formElementsCollection['fullName'];
    const emailInput = formElementsCollection['email'];
    const ticketsInput = formElementsCollection['tickets'];
    const eventSelect = formElementsCollection['eventSelected'];
    const termsCheckbox = formElementsCollection['terms'];

    const nameValue = fullNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const ticketsValue = Number(ticketsInput.value);
    const selectedEvent = eventSelect.options[eventSelect.selectedIndex].text;
    const termsChecked = termsCheckbox.checked;

    let isValid = true;


    if (nameValue.length < 3) {
        isValid = false;
        errorName.textContent = "⚠️ Name must be at least 3 characters long.";
        errorName.style.display = 'block';
        fullNameInput.style.borderColor = 'var(--accent-danger)';
        console.log("Validation Error: Name is invalid.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        isValid = false;
        errorEmail.textContent = "⚠️ Please enter a valid email address (e.g. user@example.com).";
        errorEmail.style.display = 'block';
        emailInput.style.borderColor = 'var(--accent-danger)';
        console.log("Validation Error: Email is invalid.");
    }

    if (ticketsValue < 1 || ticketsValue > 10 || isNaN(ticketsValue)) {
        isValid = false;
        errorTickets.textContent = "⚠️ Ticket quantity must be between 1 and 10.";
        errorTickets.style.display = 'block';
        ticketsInput.style.borderColor = 'var(--accent-danger)';
        console.log("Validation Error: Tickets limit violated.");
    }

    if (!termsChecked) {
        isValid = false;
        errorTerms.style.display = 'block';
        console.log("Validation Error: Terms checkbox unselected.");
    }

    if (isValid) {
        console.log("Success! Form data validation passed. Submitting object details:");

        const formDataPayload = {
            fullName: nameValue,
            email: emailValue,
            tickets: ticketsValue,
            event: selectedEvent
        };
        console.log(formDataPayload);

        successBanner.innerHTML = `
            <strong>✓ Registration Successful!</strong><br>
            Hello ${nameValue}, you have booked ${ticketsValue} seat(s) for the <strong>${selectedEvent}</strong>.<br>
            A confirmation receipt has been sent to <em>${emailValue}</em>.
        `;
        successBanner.style.display = 'block';

        fullNameInput.value = '';
        emailInput.value = '';
        ticketsInput.value = '1';
        termsCheckbox.checked = false;

    } else {
        console.warn("Form validation failed. Please check inline error labels.");
    }
});

function clearErrors() {
    errorName.style.display = 'none';
    errorEmail.style.display = 'none';
    errorTickets.style.display = 'none';
    errorTerms.style.display = 'none';

    const inputs = registrationForm.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.style.borderColor = 'var(--border-color)';
    });
}
