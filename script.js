document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("themeSwitch");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        body.classList.add(savedTheme);
        toggle.checked = savedTheme === "light-mode";
    } else {
        body.classList.add("dark-mode"); 
    }

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
        } else {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
        }
    });
});
