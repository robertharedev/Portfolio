// Edits the contact form's link so that my email is a bit more hidden from the user as it requires more clicking
// to find it using Chrome Developer Tools than it would be if it were in the index.html file
// (I know it doesn't really do much but it makes me feel better and if you're on GitHub reading this... See.)
function sendEmail() {
    const form = document.getElementById("contact-form")            // gets the form
    form.action = "https://formsubmit.co/robertharedev@gmail.com";  // changes the form's action link
    form.submit();                                                  // submitting the form causes the form's action link to be opened
    form.action = "javascript:sendEmail()";                         // sets the link back
}