// Contador simple de carrito
let cartCount = 0;
const cartCountSpan = document.getElementById("cartCount");
const addCartButtons = document.querySelectorAll(".btn-add-cart");

addCartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
    });
});

// Búsqueda desde modal
const modalSearchInput = document.getElementById("modalSearchInput");
const modalSearchBtn = document.getElementById("modalSearchBtn");

if (modalSearchBtn) {
    modalSearchBtn.addEventListener("click", () => {
        const text = modalSearchInput.value.trim();
        if (text === "") {
            alert("Por favor escribe algo para buscar.");
        } else {
            alert("Buscando: " + text);
        }
    });
}

// Búsqueda desde móvil
const inputMobileSearch = document.getElementById("inputMobileSearch");
const btnMobileSearch = document.getElementById("btnMobileSearch");

if (btnMobileSearch) {
    btnMobileSearch.addEventListener("click", () => {
        const text = inputMobileSearch.value.trim();
        if (text === "") {
            alert("Por favor escribe algo para buscar.");
        } else {
            alert("Buscando: " + text);
        }
    });
}

// Suscripción
const btnSubscribe = document.getElementById("btnSubscribe");
const subscribeEmail = document.getElementById("subscribeEmail");

if (btnSubscribe) {
    btnSubscribe.addEventListener("click", () => {
        const email = subscribeEmail.value.trim();
        if (email === "") {
            alert("Por favor ingresa tu correo.");
        } else {
            alert("Gracias por suscribirte: " + email);
            subscribeEmail.value = "";
        }
    });
}
