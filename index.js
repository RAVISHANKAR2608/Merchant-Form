document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    /* const formDataObject = {};
      formData.forEach(function (value, key) {
        formDataObject[key] = value;
      }); */

    const formDataObject = {};
    formData.forEach((value, key) => {
      if (formDataObject[key]) {
        if (Array.isArray(formDataObject[key])) {
          formDataObject[key].push(value);
        } else {
          formDataObject[key] = [formDataObject[key], value];
        }
      } else {
        formDataObject[key] = value;
      }
    });

       // Retrieve existing stored data or initialize an empty array
       let storedData = JSON.parse(localStorage.getItem("formData")) || [];

       // Add the current form data to the stored data array
       storedData.push(formDataObject);
   
       // Store the updated data in localStorage
       localStorage.setItem("formData", JSON.stringify(storedData));
   
       console.log("Form Data:", formDataObject);
   
       form.reset();
    });
   
     // Load and populate stored form data on page load
     const storedFormData = localStorage.getItem("formData");
     if (storedFormData) {
       const parsedData = JSON.parse(storedFormData);
       
       console.log("Stored Form Data:", parsedData);
     }
});

  // Load stored form data on page load
  /* const storedFormData = localStorage.getItem("formData");
  if (storedFormData) {
    const parsedData = JSON.parse(storedFormData);
    for (const key in parsedData) {
      if (Array.isArray(parsedData[key])) {
        parsedData[key].forEach((value) => {
          const input = form.querySelector(`[name="${key}"][value="${value}"]`);
          if (input) {
            input.checked = true;
          }
        });
      } else {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
          input.value = parsedData[key];
        }
      }
    }
  } */
// });
