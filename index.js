window.addEventListener("scroll", function () {
  var header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

contactForm.onsubmit = function (event) {
  let valid = true;

  nameInput.setCustomValidity("");
  emailInput.setCustomValidity("");
  messageInput.setCustomValidity("");

  if (nameInput.value.trim() === "") {
    valid = false;
    nameInput.setCustomValidity("Name is required.");
  }

  if (emailInput.value.trim() === "") {
    valid = false;
    emailInput.setCustomValidity("Email is required.");
  } else if (!isValidEmail(emailInput.value)) {
    valid = false;
    emailInput.setCustomValidity("Invalid email address.");
  }

  if (messageInput.value.trim() === "") {
    valid = false;
    messageInput.setCustomValidity("Message is required.");
  }

  return valid;
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


var i =0;
var images = [];


images[0] = 'slider.png'
images[1] = 'image1.png'
images[2] = 'image2.png'

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("changeImg()",2000);
}

window.onload= changeImg;