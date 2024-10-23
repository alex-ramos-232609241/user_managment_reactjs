
# Gestión de Usuarios con React

Este proyecto es una aplicación simple en React que permite gestionar una lista de usuarios. La aplicación permite agregar, editar, y eliminar usuarios en una lista.

## Funcionalidades

- **Agregar Usuarios**: Permite agregar un nuevo usuario con un nombre y un nombre de usuario.
- **Editar Usuarios**: Permite modificar los detalles de un usuario existente.
- **Eliminar Usuarios**: Permite eliminar un usuario de la lista.
- **Ver Fecha Actual**: Muestra la fecha actual en la interfaz.

## Estructura del Proyecto

El proyecto contiene los siguientes componentes:

- **App.js**: El componente principal que maneja el estado de la lista de usuarios y gestiona las operaciones de agregar, editar, y eliminar usuarios.
- **UserTable.js**: Muestra la lista de usuarios actuales con opciones para editar o eliminar cada usuario.
- **AddUserForm.js**: Un formulario que permite agregar nuevos usuarios a la lista.
- **EditYo.js**: Un formulario que permite editar los detalles de un usuario existente.
- **FechaActual.js**: Muestra la fecha actual en la pantalla.

## Instalación y Ejecución

1. Clona este repositorio:
   ```
   git clone [URL del repositorio]
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Ejecuta la aplicación:
   ```
   npm start
   ```

## Uso

1. Al iniciar la aplicación, verás una lista de usuarios predeterminada.
2. Para agregar un nuevo usuario, completa el formulario de "Agregar usuario" y haz clic en "Agregar".
3. Para editar un usuario existente, haz clic en "Editar" junto al usuario correspondiente. Se cargará el formulario de edición.
4. Para eliminar un usuario, haz clic en "Eliminar" junto al usuario correspondiente.

## Dependencias

- **React**: Librería principal para construir la interfaz de usuario.
- **uuid**: Utilizada para generar identificadores únicos para los usuarios.

