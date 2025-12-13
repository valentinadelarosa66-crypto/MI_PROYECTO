document.addEventListener("DOMContentLoaded", () => {

    const btnContinuarEnvio = document.getElementById("btnContinuarEnvio");
    if (btnContinuarEnvio) {
        btnContinuarEnvio.addEventListener("click", () => {
            window.location.href = "envio.html";
        });
    }

});
