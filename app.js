// Declara el array de amigos
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    const nuevoAmigo = document.getElementById("amigo").value.trim();

    // Validar la entrada
    if (nuevoAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Agrega el nuevo amigo al array
    amigos.push(nuevoAmigo);

    // Limpia el input
    document.getElementById('amigo').value = "";

    // Actualiza la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    let ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = ""; // Limpia la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    });
}

// Función para seleccionar un amigo secreto aleatoriamente y mostrarlo en la página
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    const amigoAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[amigoAleatorio];

    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpia el resultado

    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    ulResultado.appendChild(li); // Agrega el amigo secreto al resultado
}