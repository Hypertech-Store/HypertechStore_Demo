window.addEventListener("load", () => {
  const apiKey = "TzlduqATkyJYKvLng1y1Idti5ocFFUvALoWcQ1MS"; // Goong API key
  const addressInput = document.getElementById("address");
  const suggestionsContainer = document.getElementById("suggestions");
  const cityInput = document.getElementById("city");
  const districtInput = document.getElementById("district");
  const wardInput = document.getElementById("ward");
  let sessionToken = crypto.randomUUID();

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const debouncedSearch = debounce((query) => {
    if (query.length < 2) {
      suggestionsContainer.style.display = "none";
      return;
    }

    fetch(
      `https://rsapi.goong.io/Place/AutoComplete?api_key=${apiKey}&input=${encodeURIComponent(
        query
      )}&sessiontoken=${sessionToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          suggestionsContainer.innerHTML = "";
          suggestionsContainer.style.display = "block";

          data.predictions.forEach((prediction) => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.textContent = prediction.description;
            div.addEventListener("click", () => {
              addressInput.value = prediction.description;
              suggestionsContainer.style.display = "none";

              if (prediction.compound) {
                cityInput.value = prediction.compound.province || "";
                districtInput.value = prediction.compound.district || "";
                wardInput.value = prediction.compound.commune || "";
              }
            });
            suggestionsContainer.appendChild(div);
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  }, 300);

  // Check if addressInput exists before adding the event listener
  if (addressInput) {
    addressInput.addEventListener("input", (e) =>
      debouncedSearch(e.target.value)
    );
  } else {
    console.error("Address input not found!");
  }

  // Check if suggestionsContainer exists before attaching click event listener
  if (suggestionsContainer) {
    document.addEventListener("click", function (e) {
      if (
        !suggestionsContainer.contains(e.target) &&
        e.target !== addressInput
      ) {
        suggestionsContainer.style.display = "none";
      }
    });
  } else {
    console.error("Suggestions container not found!");
  }

  const addressInputField = document.getElementById("address");
  const button = document.querySelector(".btn-phoenix-primary");

  // Ensure the address input exists before attaching event listener
  if (addressInputField && button) {
    addressInputField.addEventListener("input", function (e) {
      const input = e.target;

      if (input.value.trim() !== "") {
        input.style.borderRadius = "0.375rem 0.375rem 0 0";
        input.style.boxShadow = "none";
        input.style.webkitBoxShadow = "none";

        button.disabled = false;
      } else {
        input.style.borderRadius = "";
        input.style.boxShadow = "";
        input.style.webkitBoxShadow = "";

        button.disabled = true;
      }
    });
  }
  
});
