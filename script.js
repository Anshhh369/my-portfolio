document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
        bar.style.width = bar.classList.contains("python") ? "90%" :
                          bar.classList.contains("ml") ? "85%" : "80%";
    });
});
