function seleccionar(link) {
    var opciones = document.querySelectorAll("#links a");
    opciones.forEach(function(opcion) {
        opcion.className = ""; // Elimina la clase activa de todos
    });

    link.classList.add("activo"); // Añade la clase activa

    var x = document.getElementById("nav");
    x.className = ""; // Restablece el menú responsivo
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    x.classList.toggle("responsive");
}

window.onscroll = function () {
    efectoHabilidades();
};

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}
