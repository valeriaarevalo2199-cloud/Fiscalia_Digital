//==============================
// MENÚ RESPONSIVE
//==============================

const menuBtn = document.querySelector(".menu-responsive");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("mostrar-menu");
});

//==============================
// CERRAR MENÚ AL SELECCIONAR
//==============================

document.querySelectorAll(".menu a").forEach(enlace => {

    enlace.addEventListener("click", () => {

        menu.classList.remove("mostrar-menu");

    });

});

//==============================
// EFECTO NAVBAR AL HACER SCROLL
//==============================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("navbar-scroll");

    } else {

        navbar.classList.remove("navbar-scroll");

    }

});

//==============================
// BOTÓN VOLVER ARRIBA
//==============================

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

//==============================
// ANIMACIONES AL HACER SCROLL
//==============================

const elementos = document.querySelectorAll(".card, .objetivo, .recursos-grid div");

const mostrarElemento = () => {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        const alturaPantalla = window.innerHeight - 100;

        if (posicion < alturaPantalla) {

            elemento.classList.add("visible");

        }

    });

};

window.addEventListener("scroll", mostrarElemento);

window.addEventListener("load", mostrarElemento);
