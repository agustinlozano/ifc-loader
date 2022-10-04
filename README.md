## IFC Proto Loader
Este prototipo se encarga de cargar un archivo IFC en la aplicación para poder clasificar
la información contenida en él y posteriormente poder servir con ciertos datos a una API.

Este proyecto es una interfaz que participa en un esquema de comunicación de la plataforma
Bimtrazer.

### Tecnologías
#### Dependencia de terceros
- [IFC.js - web-ifc](https://github.com/IFCjs/web-ifc/)

#### Web IPI
- [FileReader](https://developer.mozilla.org/es/docs/Web/API/FileReader)

#### Dependencias de desarrollo
- [Standard](https://standardjs.com/)
- [Vite - Vitest](https://vitest.dev/)
- SCSS

### Arbol de directorios
📦src

 ┣ 📂assets

 ┣ 📂config

 ┃ ┗ 📜initIfcApi.js

 ┣ 📂loader

 ┃ ┣ 📜index.js

 ┃ ┗ 📜utils.js

 ┣ 📂services

 ┃ ┗ 📜sendChecksumData.js
 
 ┣ 📂styles
 
 ┣ 📂test
 
 ┣ 📂types
 
 ┃ ┗ 📜geometryTypes.js
 
 ┣ 📂utils
 
 ┃ ┗ 📜validate.js
 
 ┣ 📂wasm
 
 ┃ ┣ 📜web-ifc-mt.wasm
 
 ┃ ┗ 📜web-ifc.wasm
 
 ┗ 📜app.js
 

### Funciones
```JS
  /**
   * @param None
   * @returns {Promise<void>}
   */
  async function bootMyApp()
```
Inicializa la aplicación e IfcApi. Además, maneja el evento para cargar el modelo IFC.

```JS
  /**
   * @param {Event} file
   * @returns {void}
   */
  function loadModel(changed)
```
Es el event handler para la carga del modelo. Aqui es donde se instancia la clase FileReader, se lee el archivo y se dispara el onload del objeto Reader.

```JS
  /**
   * @param {Object} reader from FileReader
   * @param {Object} file
   * @returns {Promise<void>}
   */
  async function handlerOnload(reader, file)
```
Es la función donde se abre el modelo debido a que en ese punto de la ejecución de la apliacación es donde tenemos disponible el archivo y su contenido en texto plano.

También es donde se realiza el filtrado de datos. Actualmente, el filtrado de GUIDs.

Finalmente, cuando toda la información ha sido filtrada el controlador hace un llamado al servicio de `sendChecksumData`.
