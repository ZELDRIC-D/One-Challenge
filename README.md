# One-Challenge

```markdown
# Amigo Secreto 🎁

Este es un proyecto simple para realizar un sorteo de "Amigo Secreto" utilizando JavaScript. Los participantes pueden agregar sus nombres, y el programa seleccionará aleatoriamente un amigo secreto para cada uno.

---

## **Cómo funciona**

El proyecto consta de dos funciones principales:

1. **Agregar Amigos**: Permite a los usuarios agregar nombres a una lista.
2. **Sortear Amigo Secreto**: Selecciona un nombre aleatorio de la lista.

---

## **Código y Comentarios**

### Función `agregarAmigo`

```javascript
let amigos = [];

function agregarAmigo() {
    const agregarAmigo = document.getElementById("amigo").value;

    // Validar la entrada
    if (agregarAmigo == "") {
        alert("Por favor, inserte un nombre");
    } else {
        // Agrega y actualiza la lista de amigos
        amigos.push(agregarAmigo);

        // Limpia el input
        document.getElementById('amigo').value = "";

        // Actualiza la lista de amigos en la página
        let ulListaAmigos = document.getElementById("listaAmigos");
        ulListaAmigos.innerHTML += `<li>${agregarAmigo}</li>`;
    }
}
```

### Función `sortearAmigo`

```javascript
function sortearAmigo() {
    amigos.push(document.getElementById("amigo").value);

    // Valida si hay amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    // Genera un número aleatorio para seleccionar un amigo
    const amigoAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[amigoAleatorio];

    // Crea un elemento li para mostrar el resultado
    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;

    // Selecciona el ul de resultado y limpia el contenido anterior
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    // Agrega el amigo secreto al resultado
    ulResultado.appendChild(li);
}
```

---

## **Instrucciones de Uso**

1. **Agregar Amigos**:
   - Ingresa el nombre de un amigo en el campo de texto.
   - Haz clic en "Agregar" para añadirlo a la lista.

2. **Sortear Amigo Secreto**:
   - Una vez que hayas agregado todos los nombres, haz clic en "Sortear" para seleccionar un amigo secreto aleatorio.
