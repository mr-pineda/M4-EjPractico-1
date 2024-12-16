# Página Hospital ...

## Descripción:

Propuesta de página web para el **Hospital ...**. En esta nueva versión se integró `JavaScript` para mejorar la interacción con el usuario y gestionar mejor la información del equipo médico. El sitio consta de 3 vistas:

- **Inicio**: Muestra mensaje de bienvenida, información general y testimonio de pacientes.
- **Equipo Medico**: Muestra información sobre el compromiso de atencion a los pacientes y sobre el equipo médico. Tiene un chekbox para filtrar a los médicos que atiende por fonasa.
- **Contacto**: Contiene un formulario de contacto para comunicarse con el hospital.

En todas las pantallas Hay un boton para agendar Hora, el cual solicita datos mediante prompts.

## Instrucciones:

1. Descargar el contenido de este repositorio en el computador. Puede ser clonando el repositorio o descargando el .zip:

   - **Clonar el repositorio**: Puede hacerlo con cualquier gestor de repositorios. Si tiene git instalado, puede abrir una terminal en algun diretorio y ejecutar:

   ```bash
   git clone url_de_este_repo
   ```

   - Si no tiene git instalado puede presionar el botón verde `<> Code` que está en esta página y seleccionar la opción `Download ZIP`.
     1. Descargue el archivo .zip en algun directorio conocido _(ej: Escritorio, Documentos, etc.)_.
     2. Descomprima el archivo .zip

2. Dentro de la carpeta, abrir el archivo `index.html` con su navegador de preferencia.

## Estructura de carpetas y archivos

- Los archivos .html estan en la raíz del directorio.
- En el directiorio `assets` se encuentran archivos multimedia y de estilos utilizados en el sitio.
  - `./assets/img` contiene las imágenes utilizadas en el sitio.
  - `./assets/css` contiene los archivos de estilo (Usando archivos sass).
- El directorio `./lib/*` contiene las librerías utilizadas (En este caso solo Bootstrap).
- El directorio `./src/scripts/` contiene los scripts de JavaScript.
- El directorio `./src/data/` contiene los archivos .json.

## TO-DO (Rúbrica)

1. Creación de Componentes en ReactJS:

   - [x] Crea los siguientes componentes reutilizables para la aplicación del hospital:
     - [x] `DoctorCard`: Muestra la información de un doctor (nombre, especialidad, años de experiencia).
     - [x] `ServiceList`: Lista los servicios médicos disponibles en el hospital.
     - [x] `AppointmentForm`: Un formulario para que los usuarios agenden una cita con un doctor.
   - [x] Asegúrate de que los componentes sean modulares y puedan ser reutilizados en otras secciones.

2. Uso de JSX para Renderización de Datos:

   - [x] Utiliza **JSX** para crear la estructura visual de los componentes. Asegúrate de:
     - [x] Insertar expresiones JSX para mostrar los datos dinámicos de los doctores,servicios y citas.
     - [x] Utilizar correctamente atributos en JSX y evitar errores comunes como el uso incorrecto de `className` en lugar de `class`.

3. Flujo de Datos con Props:

   - [x] Implementa props para pasar datos entre los componentes:
     - [x] Pasa los datos de doctores al componente `DoctorCard` desde el componente principal.
     - [x] Pasa los datos de servicios al componente `ServiceList` desde el componente principal.
     - [x] Usa props para manejar los datos de entrada en el formulario de citas (`AppointmentForm`), como el nombre del paciente y el doctor seleccionado.

4. Listas y Keys en React:

- [x] Utiliza correctamente listas y keys en React para renderizar dinámicamente la lista de doctores y servicios.
  - [x] Asegúrate de que cada ítem de la lista tenga una key única para optimizar el rendimiento de la aplicación.

5. Formulario con Manejo de Estado:

- [x] Crea el **formulario de citas** (`AppointmentForm`) y utiliza **Hooks** como `useState` para manejar los datos del formulario (nombre del paciente, especialidad del doctor, fecha de la cita).
  - [x] Al enviar el formulario, muestra los datos ingresados en la consola del navegador o en la interfaz.

6. Introducción a Hooks y Ciclo de Vida

- [x] Utiliza **Hooks** para manejar el ciclo de vida de los componentes:
  - [x] Usa `useEffect` para cargar la lista de doctores y servicios cuando el componente principal se monta en el DOM.
  - [x] Usa `useState` para manejar el estado de las citas y los servicios seleccionados por el usuario.
