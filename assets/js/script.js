let resultado = document.getElementById("resultado");
let test = document.getElementById("test");
let nombre = document.getElementById("nombre");
let album =  document.getElementById("album");
let año = document.getElementById("año");
let compositor = document.getElementById("compositor");
let tiempo = document.getElementById("tiempo");



const ingresarDatos = () =>{
    let nombreCancion = prompt("Ingrese el nombre de la cancion");
    let nombreAlbum = prompt("Ingrese el nombre del album");
    let añoCancion = prompt("Ingrese el año de lanzamiento");
    let nombreCompositor = prompt("Ingrese el nombre del compositor");
    let duracion = prompt("Ingrese la duracion de la cancion");
    if (nombreCancion == null || nombreCancion === "" || nombreAlbum == null || nombreAlbum === "" || añoCancion == null || añoCancion === "" || nombreCompositor == null || nombreCompositor === "" || duracion == null || duracion === "") {
        alert("Debes llenar todos los campos");
        imprimir();
    } else {
        nombre.innerHTML = "Nombre: " + nombreCancion;
        localStorage.setItem('nombre', nombreCancion);
        album.innerHTML = "Album: " + nombreAlbum;
        localStorage.setItem('album', nombreAlbum);
        año.innerHTML =  "Año: " + añoCancion;
        localStorage.setItem('año', añoCancion);
        compositor.innerHTML = "Compositor: " + nombreCompositor;
        localStorage.setItem('compositor', nombreCompositor);
        tiempo.innerHTML = "Tiempo: " + duracion;
        localStorage.setItem('tiempo', duracion);
    }
    imprimir();
}

const imprimir = () =>{
    if (localStorage.getItem('nombre') && localStorage.getItem('album') && localStorage.getItem('año') && localStorage.getItem('compositor') && localStorage.getItem('tiempo')) {
        nombre.innerHTML = "Nombre: " + localStorage.getItem('nombre');
        album.innerHTML = "Album: " + localStorage.getItem('album'); 
        año.innerHTML = "Año: " + localStorage.getItem('año');
        compositor.innerHTML = "Compositor: " + localStorage.getItem("compositor");
        tiempo.innerHTML = "Tiempo: " + localStorage.getItem('tiempo' ) + " minutos";
    } else {
        nombre.innerHTML = "Nombre: 'Sin datos'";
        album.innerHTML = "Album: 'Sin datos'";
        año.innerHTML = "Año: 'Sin datos'";
        compositor.innerHTML = "Compositor: 'Sin datos'";
        tiempo.innerHTML = "Tiempo: 'Sin datos'";

    }





}

imprimir();

test.onclick = function (){
    ingresarDatos();
}