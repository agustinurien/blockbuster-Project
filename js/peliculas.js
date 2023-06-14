const peliculas = [
    { nombre: "The Notebook", resumen: "lorem", codigo: 1, class: "", img: "../img/diario de una pasion.jpg" },
    { nombre: "Notting Hill", resumen: "lorem", codigo: 2, class: "", img: "../img/nottin hill.jpg" },
    { nombre: "Pretty Woman", resumen: "lorem", codigo: 3, class: "", img: "../img/Pretty_Woman-716982233-large.jpg" },
    { nombre: "Titanic", resumen: "lorem", codigo: 4, class: "", img: "../img/titanic-1.jpg" },
];

const pelicula = document.querySelector(".peliculaFondo");
const botonPelicula = document.querySelector(".pelicula")





/*
botonPelicula.addEventListener("click", (e) => {
    const peliculaId = e.target.id;

    const peliculaSeleccionada = peliculas.find(pelicula => pelicula.codigo == peliculaId)
    if (peliculaSeleccionada) {
        const div = document.createElement("div");
        div.classList.add("contenidoPelicula");
        div.innerHTML = `
        <h1 class="tituloPeliculas">${peliculaSeleccionada.nombre}</h1>
        <p class="textoPelicula">${peliculaSeleccionada.resumen}</p>
        <img src="${peliculaSeleccionada.img}" alt="${peliculaSeleccionada.nombre}" class="imagenPelicula">
        `;

        pelicula.append(div);
    }

});
*/







