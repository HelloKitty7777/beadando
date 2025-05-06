document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const errorDiv = document.getElementById("error");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      errorDiv.textContent = ""; 
  
      const name = document.getElementById("name").value.trim();
      const age = parseInt(document.getElementById("age").value);
      const city = document.getElementById("city").value.trim();
      const job = document.getElementById("job").value.trim();
      const email = document.getElementById("email").value.trim();
  
      let errors = [];
  
      if (name.length < 10) errors.push("A névnek legalább 10 karakteresnek kell lennie.");
      if (city.length < 10) errors.push("A város neve legalább 10 karakter legyen.");
      if (job.length < 10) errors.push("A foglalkozásnak legalább 10 karakteresnek kell lennie.");
      if (isNaN(age) || age < 0 || age > 120) errors.push("A kor csak 0 és 120 között lehet.");
      if (!validateEmail(email)) errors.push("Érvénytelen email cím.");
  
      if (errors.length > 0) {
        errorDiv.innerHTML = errors.join("<br>");
      } else {
        alert("Az űrlap sikeresen elküldve!");
        form.reset();
      }
    });
  
    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });
  