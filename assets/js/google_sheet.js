document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("successModal");
  const closeBtn = document.getElementById("closeModal");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopPropagation(); // 🔥 stops navigation conflict

    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxVX0vAXXKX3TOcujkTzFIgPmO-XmX7mnXlzQodOFqfIF-8HxlCRcRFY4jQeC41UyUN/exec",
        {
          method: "POST",
          body: formData
        }
      );

      const data = await res.json();

      if (data.result === "success") {
        modal.style.display = "flex";
        form.reset();
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (err) {
      alert("Network error. Please try later.");
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
