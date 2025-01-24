// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
// code by nirdesh
    if (!/^\d{10,15}$/.test(phone)) {
        alert('Please enter a valid phone number (10-15 digits).');
        return;
    }

    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
});
