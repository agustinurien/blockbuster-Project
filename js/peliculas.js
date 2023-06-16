const peliculas = [
    { nombre: "The Notebook", resumen: "lorem", codigo: 1, class: "", img: "../img/diario de una pasion.jpg" },
    { nombre: "Notting Hill", resumen: "lorem", codigo: 2, class: "", img: "../img/nottin hill.jpg" },
    { nombre: "Pretty Woman", resumen: "lorem", codigo: 3, class: "", img: "../img/Pretty_Woman-716982233-large.jpg" },
    { nombre: "Titanic", resumen: "lorem", codigo: 4, class: "", img: "../img/titanic-1.jpg" },
];


const botonPelicula = document.querySelectorAll(".pelicula")



botonPelicula.forEach(boton => {
    boton.addEventListener("click", (e) => {
        debugger
        const peliculaId = e.currentTarget.id;
        const peliculaSeleccionada = peliculas.find(pelicula => pelicula.codigo == peliculaId)

        localStorage.setItem("infoPelicula", JSON.stringify(peliculaSeleccionada));
        if (peliculaSeleccionada) {
            recuperarPelicula();
        }

    })
});



function recuperarPelicula() {
    const peliculaFondo = document.querySelector(".seccionPelicula");

    const peliculaRecuperada = JSON.parse(localStorage.getItem("infoPelicula"));
    console.log(peliculaRecuperada);

    const div = document.createElement("div");
    div.classList.add("contenedorPelicula");
    div.style.backgroundImage = `url(${peliculaRecuperada.img})`;
    div.innerHTML = `
    <div class="contenidoPelicula">
        <h1 class="tituloPeliculas">${peliculaRecuperada.nombre}</h1>
        <p class="textoPelicula">${peliculaRecuperada.resumen}</p>
    </div>`;

}

const seccionPeli = document.querySelector(".seccionPelicula");
console.log(seccionPeli);




