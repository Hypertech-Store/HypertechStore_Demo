window.addEventListener("load", () => {
  const apiKey = "TzlduqATkyJYKvLng1y1Idti5ocFFUvALoWcQ1MS"; // Goong API key
  const addressInput = document.getElementById("address");
  const suggestionsContainer = document.getElementById("suggestions");
  const cityInput = document.getElementById("city");
  const districtInput = document.getElementById("district");
  const wardInput = document.getElementById("ward");
  let sessionToken = crypto.randomUUID();

  let suggestions = [];
  let selectedIndex = -1; // Index của gợi ý đang được chọn

  // Hàm debounce để giới hạn tần suất gọi API
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
          suggestions = data.predictions;
          suggestionsContainer.innerHTML = "";
          suggestionsContainer.style.display = "block";

          suggestions.forEach((prediction, index) => {
            const div = document.createElement("div");
            div.className = "suggestion-item";
            div.textContent = prediction.description;
            div.addEventListener("click", () => {
              addressInput.value = prediction.description; // Hiển thị toàn bộ địa chỉ vào ô địa chỉ
              suggestionsContainer.style.display = "none"; // Ẩn danh sách gợi ý

              // Phân tích địa chỉ từ trường terms của prediction
              const terms = prediction.terms;

              // Gán giá trị cho các trường city, district, ward
              cityInput.value = terms[terms.length - 1]?.value || ""; // Tỉnh/Thành phố
              districtInput.value = terms[terms.length - 2]?.value || ""; // Quận/Huyện
              wardInput.value = terms[terms.length - 3]?.value || ""; // Phường/Xã
            });

            div.classList.toggle("selected", index === selectedIndex); // Hiển thị gợi ý đã chọn
            suggestionsContainer.appendChild(div);
          });
        }
      })
      .catch((error) => console.error("Error:", error));
  }, 300);

  // Điều hướng với các phím mũi tên
  const handleKeyDown = (e) => {
    const suggestionItems = document.querySelectorAll(".suggestion-item");

    if (e.key === "ArrowDown") {
      if (selectedIndex < suggestions.length - 1) {
        selectedIndex += 1;
      } else {
        selectedIndex = 0; // Nếu đã ở cuối, quay về đầu danh sách
      }
      updateSelectedSuggestion(suggestionItems);
      e.preventDefault(); // Ngừng hành vi mặc định của phím
    } else if (e.key === "ArrowUp") {
      if (selectedIndex > 0) {
        selectedIndex -= 1;
      } else {
        selectedIndex = suggestions.length - 1; // Nếu đã ở đầu, quay về cuối danh sách
      }
      updateSelectedSuggestion(suggestionItems);
      e.preventDefault(); // Ngừng hành vi mặc định của phím
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
        const selectedPrediction = suggestions[selectedIndex];
        addressInput.value = selectedPrediction.description; // Chọn gợi ý
        suggestionsContainer.style.display = "none"; // Ẩn danh sách gợi ý

        // Phân tích địa chỉ từ trường terms của selectedPrediction
        const terms = selectedPrediction.terms;

        // Gán giá trị cho các trường city, district, ward
        cityInput.value = terms[terms.length - 1]?.value || ""; // Tỉnh/Thành phố
        districtInput.value = terms[terms.length - 2]?.value || ""; // Quận/Huyện
        wardInput.value = terms[terms.length - 3]?.value || ""; // Phường/Xã
      }
    }
  };

  // Cập nhật chỉ mục của gợi ý đã chọn
  const updateSelectedSuggestion = (suggestionItems) => {
    suggestionItems.forEach((item, index) => {
      item.classList.toggle("selected", index === selectedIndex); // Làm nổi bật gợi ý đã chọn
    });
  };

  // Lắng nghe sự kiện nhập liệu
  if (addressInput) {
    addressInput.addEventListener("input", (e) =>
      debouncedSearch(e.target.value)
    );
    addressInput.addEventListener("keydown", handleKeyDown); // Thêm sự kiện phím vào input
  } else {
    console.error("Address input not found!");
  }

  // Lắng nghe sự kiện phím lên/xuống trên danh sách gợi ý
  if (suggestionsContainer) {
    suggestionsContainer.addEventListener("keydown", handleKeyDown); // Phím mũi tên trên suggestions
  } else {
    console.error("Suggestions container not found!");
  }

  // Ẩn danh sách gợi ý nếu người dùng nhấn bên ngoài
  document.addEventListener("click", function (e) {
    if (!suggestionsContainer.contains(e.target) && e.target !== addressInput) {
      suggestionsContainer.style.display = "none";
    }
  });

  // Kích hoạt hoặc vô hiệu hóa nút khi thay đổi giá trị địa chỉ
  const addressInputField = document.getElementById("address");
  const button = document.querySelector(".btn-phoenix-primary");

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
