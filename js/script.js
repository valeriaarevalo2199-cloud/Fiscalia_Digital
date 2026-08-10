// ==========================================================
// FISCALÍA DIGITAL
// Archivo principal de JavaScript
// Proyecto Social de Formación - UNIMINUTO
//
// Funcionalidades:
// 1. Menú responsive
// 2. Cerrar menú al seleccionar una opción
// 3. Efecto del navbar al hacer scroll
// 4. Botón volver arriba
// 5. Animaciones al hacer scroll
// 6. Ampliar imágenes (modal / lightbox)
// ==========================================================

// ==========================================================
// 1. MENÚ RESPONSIVE
// ==========================================================

const menuBtn = document.querySelector(".menu-responsive");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("mostrar-menu");
    });
}

// ==========================================================
// 2. CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
// ==========================================================

if (menu) {
    document.querySelectorAll(".menu a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            menu.classList.remove("mostrar-menu");
        });
    });
}

// ==========================================================
// 3. EFECTO DEL NAVBAR AL HACER SCROLL
// ==========================================================

const navbar = document.querySelector("header");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            navbar.classList.add("navbar-scroll");
        } else {
            navbar.classList.remove("navbar-scroll");
        }
    });
}

// ==========================================================
// 4. BOTÓN VOLVER ARRIBA
// ==========================================================

const botonSubir = document.createElement("button");
botonSubir.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
botonSubir.classList.add("btn-subir");

document.body.appendChild(botonSubir);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botonSubir.classList.add("mostrar");
    } else {
        botonSubir.classList.remove("mostrar");
    }
});

botonSubir.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ==========================================================
// 5. ANIMACIONES AL HACER SCROLL
// ==========================================================

const elementos = document.querySelectorAll(
    ".card, .objetivo, .recursos-grid div, .resultado, .timeline-item, .galeria img, .imagen-evidencia"
);

const mostrarElemento = () => {
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight - 100;

        if (posicion < alturaPantalla) {
            elemento.classList.add("visible");
        }
    });
};

// Ejecutar inmediatamente
mostrarElemento();

// Ejecutar cuando cargue la página
window.addEventListener("load", mostrarElemento);

// Ejecutar durante el desplazamiento
window.addEventListener("scroll", mostrarElemento);

// ==========================================================
// 6. AMPLIAR IMÁGENES (MODAL / LIGHTBOX)
// ==========================================================

function abrirImagen(src) {
    const modal = document.getElementById("modalImagen");
    const imagen = document.getElementById("imagenGrande");

    if (!modal || !imagen) return;

    imagen.src = src;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // evita scroll mientras el modal está abierto
}

function cerrarImagen() {
    const modal = document.getElementById("modalImagen");

    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Cerrar con la tecla ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cerrarImagen();
    }
});

// Evitar que al hacer clic sobre la imagen se cierre el modal
document.addEventListener("DOMContentLoaded", () => {
    const imagenGrande = document.getElementById("imagenGrande");

    if (imagenGrande) {
        imagenGrande.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
});

// ==========================================================
// FIN DEL ARCHIVO
// ==========================================================
