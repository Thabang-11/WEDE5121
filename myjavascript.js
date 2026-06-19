/* =====================================
   Albany Bread Website
   Student: Thabang Ntlemo
===================================== */

/* Lightbox Settings */
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 300
});

/* Welcome Message */
window.onload = function () {

    let welcome =
        document.getElementById("welcomeMessage");

    if (welcome) {
        welcome.innerHTML =
            "Welcome to Albany Bread - Feel the Love, Feel the Freshness!";
    }

    showDateTime();
};

/* Search Products */
function searchProducts() {

    let input =
        document.getElementById("searchInput");

    if (!input) return;

    let filter =
        input.value.toUpperCase();

    let products =
        document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {

        let txt =
            products[i].textContent;

        if (txt.toUpperCase().indexOf(filter) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

/* Enquiry Form Validation */
function processEnquiry() {

    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let message =
        document.getElementById("message").value.trim();

    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    let response =
        document.getElementById("responseMessage");

    if (response) {
        response.innerHTML =
            "✅ Thank you " + name +
            ". Your enquiry has been submitted successfully.";
    }

    return false;
}

/* Contact Form Validation */
function processContact() {

    let name =
        document.getElementById("fullname").value.trim();

    let email =
        document.getElementById("contactEmail").value.trim();

    let subject =
        document.getElementById("subject").value.trim();

    let message =
        document.getElementById("contactMessage").value.trim();

    if (name === "" ||
        email === "" ||
        subject === "" ||
        message === "") {

        alert("Please complete all fields.");
        return false;
    }

    let response =
        document.getElementById("contactResponse");

    if (response) {
        response.innerHTML =
            "✅ Message sent successfully. We will contact you shortly.";
    }

    return false;
}

/* Dynamic Date and Time */
function showDateTime() {

    let element =
        document.getElementById("dateTime");

    if (element) {
        element.innerHTML =
            new Date().toLocaleString();
    }
}

setInterval(showDateTime, 1000);