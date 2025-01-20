document.getElementById("addressForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
  
    document.querySelectorAll("input").forEach((input) => {
      const errorMessage = input.nextElementSibling;
      if (input.value.trim() === "") {
        errorMessage.style.display = "block";
        isValid = false;
      } else if (input.id === "mobile" && !/^\d{10}$/.test(input.value)) {
        errorMessage.style.display = "block";
        isValid = false;
      } else {
        errorMessage.style.display = "none";
      }
    });
  
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
  