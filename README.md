# MD-12-BC-JS-Portal-inmobiliario
Caso práctico Módulo 12 - Bootcamp JavaScript - Portal inmobiliario

Vamos a simular un portal inmobiliario, donde mostraremos un listado de propiedades, filtraremos por una serie de campos, mostraremos el detalle y subiremos una nueva.

Esta aplicación por tanto, consta de varias página que vamos a ir implementando poco a poco.
## Listado de propiedades
Página con las propiedades disponibles segun filtro.

En esta página implementaremos:

    * Recuperar las propiedades disponibles de servidor.
    * Crear mapper para cumplir con el modelo de la vista.
    * Recuperar datos maestros de servidor para cargarlos en el filtro.
    * Crear datos maestros de cliente para cargarlos en el filtro.
    * Recoger valores del filtro.
    * Utilizar filtro para filtrar en servidor.

## Detalle de propiedad
Página para visualizar el detalle de una propiedad.

En esta página implementaremos:

    * Recuperar la propiedad de servidor según el id de la url.
    * Crear mapper para cumplir con el modelo de la vista.
    * Recuperar los valores del formulario de contacto.
    * Crear validaciones necesarias de dicho formulario.
    * Crear método post para enviar información de contacto.

## Subir una nueva propiedad
Página con el formulario para subir una propiedad nueva.

En esta página implementaremos:

    * Recuperar los valores del formulario de Datos generales.
    * Crear validaciones necesarias de dicho formulario.
    * Recuperar los valores del formulario de Datos de la vivienda.
    * Crear validaciones necesarias de dicho formulario.
    * Recuperar los valores del formulario de Subir fotos.
    * Crear mapper para cumplir con el modelo de la api.
    * Crear método post para enviar información del formulario.

        Sugerencia:
        Se puede utilizar los validadores fonk-array-required-validator para hacer que un array sea requerido y
        fonk-is-url-validator para validar una url.
