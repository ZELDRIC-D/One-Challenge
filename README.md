# Amigo Secreto 🎁

¡Bienvenido al proyecto **Amigo Secreto**! Esta es una aplicación web simple que te permite agregar amigos a una lista y realizar un sorteo para asignar un "amigo secreto" de manera aleatoria. Es perfecto para organizar intercambios de regalos en eventos, fiestas o reuniones.

---

## Características ✨

- **Agregar amigos**: Ingresa los nombres de tus amigos y agrégalos a la lista.
- **Actualizar lista**: La lista de amigos se actualiza automáticamente en la página.
- **Sortear amigo secreto**: Realiza un sorteo aleatorio para asignar un amigo secreto.
- **Interfaz sencilla**: Fácil de usar y entender.

---

## Cómo usar 🚀

1. **Agregar un amigo**:
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón **"Agregar Amigo"** (debes implementar este botón en tu HTML).
   - El nombre se agregará a la lista de amigos.

2. **Ver la lista de amigos**:
   - La lista de amigos se muestra en la página y se actualiza automáticamente cada vez que agregas un nuevo amigo.

3. **Sortear amigo secreto**:
   - Cuando tengas amigos en la lista, haz clic en el botón **"Sortear Amigo Secreto"** (debes implementar este botón en tu HTML).
   - El nombre del amigo secreto seleccionado aparecerá en la sección de resultados.
---
###  Estructura del codigo 

**agregarAmigo()**:
  - Valida que el campo de texto no esté vacío.
  - Agrega el nombre del amigo al array amigos.
  - Limpia el campo de texto después de agregar el nombre.
  - Llama a la función actualizarListaAmigos() para mostrar la lista actualizada.

**actualizarListaAmigos()**:
  - Limpia la lista actual de amigos en la página.
  - Recorre el array amigos y crea un elemento <li> por cada amigo.
  - Agrega cada <li> a la lista en la página.

**sortearAmigo()**:
  - Verifica que haya al menos un amigo en la lista.
  - Selecciona un amigo aleatorio del array amigos.
  - Muestra el nombre del amigo secreto en la sección de resultados.
