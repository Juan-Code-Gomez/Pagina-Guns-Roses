let textBlack = document.getElementById("textBlack");
let nombreBlack = document.getElementById("nombreBlack");
let albumBlack =  document.getElementById("albumBlack");
let añoBlack = document.getElementById("añoBlack");
let compositorBlack = document.getElementById("compositorBlack");
let tiempoBlack = document.getElementById("tiempoBlack");



const Datos = () =>{
    let nombreCancionBlack = prompt("Ingrese el nombre de la cancion");
    let nombreAlbumBlack = prompt("Ingrese el nombre del album");
    let añoCancionBlack = prompt("Ingrese el año de lanzamiento");
    let nombreCompositorBlack = prompt("Ingrese el nombre del compositor");
    let duracionBlack = prompt("Ingrese la duracion de la cancion");
    if (nombreCancionBlack == null || nombreCancionBlack === "" || nombreAlbumBlack == null || nombreAlbumBlack === "" || añoCancionBlack == null || añoCancionBlack === "" || nombreCompositorBlack == null || nombreCompositorBlack === "" || duracionBlack == null || duracionBlack === "") {
        alert("Debes llenar todos los campos");
        imprimirDatos();
    } else {
        nombreBlack.innerHTML = "Nombre: " + nombreCancionBlack;
        localStorage.setItem('nombre', nombreCancionBlack);
        albumBlack.innerHTML = "Album: " + nombreAlbumBlack;
        localStorage.setItem('album', nombreAlbumBlack);
        añoBlack.innerHTML =  "Año: " + añoCancionBlack;
        localStorage.setItem('año', añoCancionBlack);
        compositorBlack.innerHTML = "Compositor: " + nombreCompositorBlack;
        localStorage.setItem('compositor', nombreCompositorBlack);
        tiempoBlack.innerHTML = "Tiempo: " + duracionBlack;
        localStorage.setItem('tiempo', duracionBlack);
    }
    imprimir();
}

const imprimirDatos = () =>{
    if (localStorage.getItem('nombreBlack') && localStorage.getItem('albumBlack') && localStorage.getItem('añoBlack') && localStorage.getItem('compositorBlack') && localStorage.getItem('tiempoBlack')) {
        nombreBlack.innerHTML = "Nombre: " + localStorage.getItem('nombreBlack');
        albumBlack.innerHTML = "Album: " + localStorage.getItem('albumBlack'); 
        añoBlack.innerHTML = "Año: " + localStorage.getItem('añoBlack');
        compositorBlack.innerHTML = "Compositor: " + localStorage.getItem("compositorBlack");
        tiempoBlack.innerHTML = "Tiempo: " + localStorage.getItem('tiempoBlack' ) + " minutos";
    } else {
        nombreBlack.innerHTML = "Nombre: 'Sin datos'";
        albumBlack.innerHTML = "Album: 'Sin datos'";
        añoBlack.innerHTML = "Año: 'Sin datos'";
        compositorBlack.innerHTML = "Compositor: 'Sin datos'";
        tiempoBlack.innerHTML = "Tiempo: 'Sin datos'";

    }


}

imprimirDatos();


textBlack.onclick = function (){
    Datos();
}