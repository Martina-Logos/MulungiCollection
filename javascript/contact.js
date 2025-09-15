// Simple form handling - in a real implementation, this would connect to a backend
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Thank you for your message! In a real implementation, this would be sent to our team."
  );
  this.reset();
});
