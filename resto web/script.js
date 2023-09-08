document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling effect for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reservation form
    const reservationForm = document.getElementById('reservation-form');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(this);
            const reservationData = {
                name: formData.get('name'),
                email: formData.get('email'),
                date: formData.get('date'),
                time: formData.get('time')
            };

            // Display a confirmation message
            const confirmationMessage = `
                Thank you, ${reservationData.name}!
                Your reservation for ${reservationData.date} at ${reservationData.time} has been confirmed.
                We'll send a confirmation email to ${reservationData.email}.
            `;
            alert(confirmationMessage);

            // Clear the form
            this.reset();
        });
    }
});

