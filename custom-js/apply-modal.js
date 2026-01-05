document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("applyModal");
    const applyButtons = document.querySelectorAll(".apply-now-btn");
    const closeButton = document.querySelector(".apply-modal-close");
    const overlay = document.querySelector(".apply-modal-overlay");
    const form = document.getElementById("applyForm");
    const fileInput = form.querySelector('input[type="file"]');
    const fileUploadWrapper = form.querySelector('.file-upload-wrapper');

    // Open modal when Apply Now button is clicked
    applyButtons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const jobTitle = this.getAttribute("data-job-title");
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    // Close modal functions
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
        form.reset();
        if (fileUploadWrapper) {
            const fileUploadText = fileUploadWrapper.querySelector('.file-upload-text');
            if (fileUploadText) {
                fileUploadText.textContent = "ATTACH RESUME*";
            }
            fileUploadWrapper.classList.remove("has-file");
        }
    }

    // Close on X button click
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    // Close on overlay click
    if (overlay) {
        overlay.addEventListener("click", closeModal);
    }

    // Close on ESC key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // Update file name display
    if (fileInput && fileUploadWrapper) {
        const fileUploadText = fileUploadWrapper.querySelector('.file-upload-text');
        fileInput.addEventListener("change", function(e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : "";
            if (fileName && fileUploadText) {
                fileUploadText.textContent = fileName;
                fileUploadWrapper.classList.add("has-file");
            } else {
                if (fileUploadText) {
                    fileUploadText.textContent = "ATTACH RESUME*";
                }
                fileUploadWrapper.classList.remove("has-file");
            }
        });
    }

    // Form submission
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const jobTitle = document.querySelector(".apply-now-btn.active")?.getAttribute("data-job-title") || "Job Application";
            formData.append("jobTitle", jobTitle);

            // Here you can add AJAX submission or form action
            console.log("Form submitted:", Object.fromEntries(formData));
            
            // Example: You can uncomment this to submit via AJAX
            /*
            fetch('/wp-admin/admin-ajax.php?action=submit_job_application', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Application submitted successfully!');
                closeModal();
            })
            .catch(error => {
                alert('Error submitting application. Please try again.');
            });
            */

            // For now, just show alert and close
            alert("Application submitted successfully!");
            closeModal();
        });
    }
});

