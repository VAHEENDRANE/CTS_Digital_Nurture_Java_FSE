
$(document).ready(function() {
    console.log("[jQuery Init] DOM ready. Executing jQuery logic.");

    $('#showFormBtn').click(function() {
        console.log("[jQuery] Show button clicked. Fading in booking form...");

        $('#booking-form-box').css('display', 'flex').hide().fadeIn('slow');
    });

    $('#registerBtn').click(function() {
        console.log("[jQuery] Register button clicked. Validating input fields...");

        const name = $('#jq-name').val().trim();
        const email = $('#jq-email').val().trim();

        if (!name || !email) {
            alert("Please complete the Name and Email fields!");
            return;
        }

        $('#jq-success-msg').html(`
            <strong>✓ Registration Booked!</strong><br>
            Thank you, ${name}. We have registered your reservation.
        `);

        $('#booking-form-box').fadeOut('medium', function() {
            $('#jq-success-msg').fadeIn('fast');

            console.log(`[jQuery] Event booking confirmed for: ${name} (${email})`);

            $('#jq-name').val('');
            $('#jq-email').val('');

            setTimeout(function() {
                console.log("[jQuery] Automatically fading out success confirmation message.");
                $('#jq-success-msg').fadeOut('slow');
            }, 3000);
        });
    });
});
