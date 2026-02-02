document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");

  if (!form) return; // safety check

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInput = document.getElementById("username");
    if (!userInput) {
      alert("Username field not found");
      return;
    }

    const user = userInput.value.trim();

    if (user === "student") {
      localStorage.setItem("score", "2 / 2");
      window.location.href = "dashboard.html";

    } else if (user === "admin") {
      alert("Admin dashboard simulation");

    } else if (user === "examiner") {
      alert("Examiner dashboard simulation");

    } else {
      alert("Invalid credentials");
    }
  });
});
