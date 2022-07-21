

const opcion = document.querySelectorAll('.opcion');

// Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {

    // Añadimos un evento a cada elemento seleccionado
    e.addEventListener('click', function(e){

        // Alteranmos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
    });
});

var temaf= localStorage.getItem("color");
document.getElementById("fondo").value = temaf;
body.style.backgroundColor = temaf;

function cambiaFondo(x) {
    var body = document.getElementById("body");
    localStorage.setItem("color", x.value);
    body.style.backgroundColor = x.value;

}





