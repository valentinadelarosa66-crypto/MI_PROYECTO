document.getElementById("formContacto").addEventListener("submit", function(e) {
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexCorreo.test(correo)) {
        alert("Por favor ingresa un correo válido con @");
        return;
    }

    const telefono = document.getElementById("telefono").value;
    if (!/^[0-9]{10}$/.test(telefono)) {
        alert("El teléfono debe tener exactamente 10 números");
        return;
    }

    alert("✅ Tu mensaje ha sido enviado correctamente");
    this.reset();
});
