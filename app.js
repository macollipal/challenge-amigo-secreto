// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//let numeroSecreto = 0;
//let intentos = 0;
let listaAmigos = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Amigote Secreto!');
    asignarTextoElemento('h2','Digite el nombre de su amigo!');
    //asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    //console.log(numeroSecreto);
    //console.log(listaAmigos)
    document.getElementById('resultado').value=""
}

function agregarAmigo() {
    // Obtener el valor del input y eliminar espacios en blanco al inicio y final
    const amigoInput = document.querySelector('#amigo');
    const amigoNombre = amigoInput.value.trim();

    // Validar si está vacío o solo contiene espacios
    if (!amigoNombre) {
        alert('Por favor, ingresa un nombre válido');
        return;
    }

    // Validar si solo contiene espacios en blanco
    if (amigoNombre.length === 0) {
        alert('El nombre no puede estar vacío');
        return;
    }

    // Validar si ya existe en la lista (ignorando mayúsculas y minúsculas)
    const nombreExiste = listaAmigos.some(amigo => 
        amigo.toLowerCase() === amigoNombre.toLowerCase()
    );

    if (nombreExiste) {
        alert('Este amigo ya está en la lista');
        amigoInput.value = '';
        return;
    }

    // Si pasa todas las validaciones, agregar a la lista
    listaAmigos.push(amigoNombre);
    
    // Actualizar la lista visual
    actualizarListaVisual();
    
    // Limpiar el input
    amigoInput.value = '';
}

function actualizarListaVisual() {
    const listaElement = document.querySelector('#listaAmigos');
    listaElement.innerHTML = '';
    
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function reiniciarJuego() {
    // Limpiar la lista de amigos
    listaAmigos = [];
    
    // Limpiar el input
    document.querySelector('#amigo').value = '';
    
    // Limpiar la lista mostrada
    document.querySelector('#listaAmigos').innerHTML = '';
    
    // Limpiar el resultado
    document.querySelector('#resultado').innerHTML = '';
}

function sortearAmigo() {
    // Verificar que haya suficientes amigos para el sorteo
    if (listaAmigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo');
        return;
    }

    let intentosMaximos = 100; // Prevenir bucle infinito
    let sorteoExitoso = false;
    let asignaciones;

    while (!sorteoExitoso && intentosMaximos > 0) {
        try {
            asignaciones = realizarSorteo();
            sorteoExitoso = true;
        } catch (error) {
            intentosMaximos--;
            continue;
        }
    }

    if (!sorteoExitoso) {
        alert('No se pudo completar el sorteo. Por favor, inténtalo de nuevo.');
        return;
    }

    mostrarResultados(asignaciones);
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <li class="resultado-item">
            ¡El amigo seleccionado es: <strong>${amigoSeleccionado}</strong>!
        </li>
    `;
}

condicionesIniciales();