document.addEventListener("DOMContentLoaded", function () {
    // Back button click event
    document.querySelector(".back-button").addEventListener("click", function() {
        alert("Back button clicked!");
    });

    // Search bar input event
    document.querySelector(".search-bar input").addEventListener("input", function(event) {
        let query = event.target.value.toLowerCase(); // Get the search query in lowercase
        document.querySelectorAll(".setting-item").forEach(item => {
            // Get the text content of the setting item (excluding the icon)
            let itemText = item.textContent.toLowerCase();
            // Check if the text content includes the search query
            item.style.display = itemText.includes(query) ? "flex" : "none";
        });
    });
});