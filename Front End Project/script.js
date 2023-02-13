window.onload = function() {
    // animate welcome message
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.style.opacity = 0;
    setTimeout(function() {
      welcomeMessage.style.opacity = 1;
    }, 1000);
  
    // animate self photo
    const selfPhoto = document.getElementById("self-photo");
    selfPhoto.style.opacity = 0;
    selfPhoto.style.transform = "translateY(50px)";
    setTimeout(function() {
      selfPhoto.style.opacity = 1;
      selfPhoto.style.transform = "translateY(0)";
    }, 2000);
  
    // animate education history
    const educationHistory = document.getElementById("education-history");
    educationHistory.style.opacity = 0;
    educationHistory.style.transform = "translateX(-50px)";
    setTimeout(function() {
      educationHistory.style.opacity = 1;
      educationHistory.style.transform = "translateX(0)";
    }, 3000);
  
    // validate contact form
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
      const fullName = document.getElementById("full-name").value;
      const email = document.getElementById("email").value;
      const linkedIn = document.getElementById("linkedin").value;
      const comments = document.getElementById("comments").value;
  
      if (!fullName || !email || !comments) {
        alert("Please fill in all required fields.");
        event.preventDefault();
      }
    });
  };
  