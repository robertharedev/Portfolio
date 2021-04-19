// Edits the contact form's link so that my email is a bit more hidden from the user as it requires more clicking
// to find it using Chrome Developer Tools than it would be if it were in the index.html file
// (I know it doesn't really do much but it makes me feel better and if you're on GitHub reading this... See.)
function sendEmail() {
    const form = document.getElementById("contact-form")
    form.action = "https://formsubmit.co/robert.hare36@gmail.com";
    form.submit();
}