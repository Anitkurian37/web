document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       THEME TOGGLE
    ========================== */
    const toggle = document.getElementById("themeSwitch");
    const body = document.body;

    if (toggle) {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            body.classList.add(savedTheme);
            toggle.checked = savedTheme === "light-mode";
        } else {
            body.classList.add("dark-mode");
        }

        toggle.addEventListener("change", function () {
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
    }

    /* =========================
       CONTACT FORM
    ========================== */
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMessage");

    if (form && successMsg) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const mobile = document.getElementById("mobile")?.value.trim();

            if (!name || !email || !mobile) {
                alert("Please fill in all mandatory fields (marked *).");
                return;
            }

            successMsg.style.display = "block";
            successMsg.scrollIntoView({ behavior: "smooth", block: "center" });

            form.reset();
        });
    }

});

/* =========================
   COPY EMAIL (GLOBAL)
========================== */
function copyEmail() {
    const email = "anitkurian37@gmail.com";

    navigator.clipboard.writeText(email)
        .then(() => {
            showToast("Email copied to clipboard");
        })
        .catch(() => {
            showToast("Unable to copy email", true);
        });
}

/* =========================
   TOAST NOTIFICATION
========================== */
function showToast(message, isError = false) {
    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.style.backgroundColor = isError ? "#b91c1c" : "#1f7a1f";
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
