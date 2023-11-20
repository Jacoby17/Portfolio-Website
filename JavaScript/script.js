document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const text = ["Hello,", "I'M JACOBUS", "I am a Software Developer", "& Designer"];
let index = 0;
let charIndex = 0
let currentText = "";
let letter = "";

function type() {
  if (charIndex <= text[index].length) {
    currentText = text[index].slice(0, charIndex + 1);
    document.querySelector('.text-container p:nth-child(2)').textContent = currentText;
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    currentText = text[index].slice(0, charIndex - 1);
    document.querySelector('.text-container p:nth-child(2)').textContent = currentText;
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index++;
    if (index >= text.length) index = 0;
    setTimeout(type, 100);
  }
}

type();

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jacobusspreeth@gmail.com",
    Password : "6BC86708A6FD20BDB07032C9762B9DE0DFB3",
    To : 'jacobusspreeth@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert(message)
  );
}