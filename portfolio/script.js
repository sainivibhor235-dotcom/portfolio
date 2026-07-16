// ===========================
// CONTACT FORM VALIDATION
// (kept for future use if a contact form is added back)
// ===========================

function sendMessage() {

  var nameField    = document.getElementById("name");
  var emailField   = document.getElementById("email");
  var messageField = document.getElementById("message");
  var msg          = document.getElementById("form-msg");

  // Bail out safely if this page has no contact form
  if (!nameField || !emailField || !messageField || !msg) {
    return;
  }

  var name    = nameField.value;
  var email   = emailField.value;
  var message = messageField.value;

  msg.className = "";
  msg.style.display = "none";

  if (name === "" || email === "" || message === "") {
    msg.textContent = "Please fill in all fields.";
    msg.className = "error";
    return;
  }

  if (email.indexOf("@") === -1) {
    msg.textContent = "Please enter a valid email address.";
    msg.className = "error";
    return;
  }

  msg.textContent = "Message sent! I will get back to you soon.";
  msg.className = "success";

  nameField.value    = "";
  emailField.value   = "";
  messageField.value = "";
}