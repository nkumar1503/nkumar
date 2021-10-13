// circular Form Functions
function contactForm() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwxvPEHpFNRFw37O_d-j6KGoQKI5F7VXuAFCrmsQku4BhiiLGmNWGD8hwed1BAkoOLL3Q/exec'
    const form = document.forms['contact-form']
    form.addEventListener('submit', e => {
        document.getElementById("contactSubmitButton").disabled = true;
        document.getElementById("contactSubmitButton").value = 'Loading..';
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => submittedcontactForm())
            .catch(error => console.error('Error!', error.message))
    })
}


function submittedcontactForm() {
    document.getElementById("contactSubmitButton").value = "Submitted";
    document.getElementById("contactFormAlert").innerHTML += "Thanks For Contacting Us";
    var contactalertdiv = document.getElementById("contactFormAlert");
    contactalertdiv.style.display = "block";
    document.getElementById("contact-Form").reset();
}