document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form[data-validate]");
    forms.forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault();
            const type = form.getAttribute("data-validate");
            if (type === "checkout") {
                const successBox = document.getElementById("checkout-success");
                if (successBox) successBox.style.display = "block";
                localStorage.removeItem("florentiaCart");
                setTimeout(() => form.reset(), 2000);
            } else {
                alert("Успешно испратено! Florentia ви благодари.");
                form.reset();
            }
        });
    });
});