/* ============== Sustainability Popup Script ============== */

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("sustainabilityPopup");
    const closeButton = document.querySelector(".sustainability-popup-close");
    const overlay = document.querySelector(".sustainability-popup-overlay");
    const exploreLink = document.querySelector(".sustainability-popup-link");

    // Check if popup was already closed (using localStorage)
    const popupClosed = localStorage.getItem("sustainabilityPopupClosed");

    // Show popup on page load if not previously closed
    if (!popupClosed) {
        setTimeout(function() {
            if (popup) {
                popup.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        }, 500); // Small delay for smooth appearance
    }

    // Function to close popup
    function closePopup() {
        if (popup) {
            popup.classList.remove("active");
            document.body.style.overflow = "";
            // Remember that popup was closed (optional - remove if you want it to show every time)
            localStorage.setItem("sustainabilityPopupClosed", "true");
        }
    }

    // Close on X button click
    if (closeButton) {
        closeButton.addEventListener("click", closePopup);
    }

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener("click", closePopup);
    }

    // Close on ESC key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && popup && popup.classList.contains("active")) {
            closePopup();
        }
    });

    // Handle explore link click (optional - you can customize this)
    if (exploreLink) {
        exploreLink.addEventListener("click", function(e) {
            // You can add custom behavior here, like navigating to a specific page
            // e.preventDefault();
            // window.location.href = "/sustainability"; // Example
        });
    }
});

