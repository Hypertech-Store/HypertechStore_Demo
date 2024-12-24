window.addEventListener("load", () => {
  const apiKey = "TzlduqATkyJYKvLng1y1Idti5ocFFUvALoWcQ1MS"; // https://account.goong.io/keys
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

    // đây là demo, các bạn nên dùng API từ backend để tăng bảo mật, có thể thêm cache và rate limit
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

              // Tự động điền các trường địa chỉ từ compound
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
      .catch((error) => console.error("Lỗi:", error));
  }, 300);

  if (addressInput) {
    addressInput.addEventListener("input", (e) =>
      debouncedSearch(e.target.value)
    );
  } else {
    console.error("Address input not found!");
  }

  // Tắt suggestions nếu người dùng click ra ngoài
  document.addEventListener("click", function (e) {
    if (!suggestionsContainer.contains(e.target) && e.target !== addressInput) {
      suggestionsContainer.style.display = "none";
    }
  });

  document.getElementById("address").addEventListener("input", function (e) {
    const input = e.target;
    if (input.value.trim() !== "") {
      input.style.borderRadius = "0.375rem 0.375rem 0 0"; // Gõ có nội dung
    } else {
      input.style.borderRadius = ""; // Khi không gõ, quay lại giá trị mặc định
    }
  });
});
