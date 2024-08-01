
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('Message');

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario 

        let valid = true;

        if (nameInput.value.trim() === "") {
            alert("El campo de nombre es obligatorio.");
            valid = false;
        }

        if (phoneInput.value.trim() === "") {
            alert("El campo de teléfono es obligatorio.");
            valid = false;
        }

        if (emailInput.value.trim() === "") {
            alert("El campo de correo electrónico es obligatorio.");
            valid = false;
        }

        if (messageInput.value.trim() === "") {
            alert("El campo de mensaje es obligatorio.");
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailInput.value)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            valid = false;
        }

        if (valid) {
            alert("Formulario enviado correctamente!");
            form.submit(); // Enviar el formulario si todo está bien
        }
    });
});