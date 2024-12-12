// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  // Contact form submission (Demo)
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  });
  