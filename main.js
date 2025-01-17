var typed= new Typed(".text", {
    strings: ["Web Developer" , "Android Developer" , "UI/UX Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Add an event listener to handle the form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from refreshing upon form submission

    // Get the values from the form fields
    const params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send the form data using EmailJS service
    emailjs.send("service_hbpf7do", "template_bs7w9dd", params)
        .then(function (response) {
            // Show success alert
            alert("Form submitted successfully! Status: " + response.status);
        })
        .catch(function (error) {
            // Show error alert if the request fails
            alert("Error sending form. Please try again later. Error: " + error);
        });
});
