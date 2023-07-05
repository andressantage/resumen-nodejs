/**
 * 1. Node JS Básico
 * 1.1. Introducción a Node
 * Node.js: es un entorno de ejecución de código JavaScript que se basa en el motor
 * de JavaScript V8 de Google Chrome
 * *permite ejecutar código JavaScript en el lado del servidor
 * *utiliza un modelo de E/S sin bloqueo y basado en eventos (permiten muchas solicitudes a la vez)
 * ? npm (Node Package Manager): e permite descargar, instalar y administrar fácilmente paquetes y
 * ? módulos de JavaScript de código abierto
 */

/**
 * 1.2. Características de Node
 * *1.2.1. JavaScript en el lado del servidor
 * *1.2.2. Modelo de E/S sin bloqueo y basado en eventos: puede manejar múltiples solicitudes 
 * concurrentemente sin bloquear el flujo de ejecución
 * *1.2.3. Arquitectura orientada a módulos: sistema de módulos de CommonJS,facilita la reutilización 
 * de código y la creación de aplicaciones modularizadas, permite s separar el código en módulos y
 * utilizar paquetes de terceros
 * *1.2.4. Amplia comunidad y ecosistema: amplia gama de bibliotecas, frameworks y herramientas 
 * disponibles en el registro de paquetes npm
 * *1.2.5. Escalabilidad: capacidad para manejar grandes cantidades de solicitudes concurrentes 
 * con eficiencia
 * *1.2.6. Orientado a eventos: se basa en un patrón de programación orientado a eventos, lo que significa 
 * que las operaciones se desencadenan en respuesta a eventos específicos
 */

/**
 * 1.3. Como funciona Node
 * *Node.js se basa en una arquitectura de tiempo de ejecución de JavaScript basada
 * en eventos y utiliza un solo subproceso (thread) principal para ejecutar el código JavaScript
 * *1.3.1. Inicialización: Cuando se inicia una aplicación Node.js, se realiza una inicialización del entorno de ejecución.
 * *1.3.2. Event loop y manejo de eventos:  Node.js utiliza un bucle de eventos (event loop) para manejar 
 * las solicitudes y las operaciones de E/S de manera asincrónica
 * *1.3.3. Gestión de solicitudes: Node.js utiliza operaciones de E/S no
*bloqueantes, lo que significa que puede iniciar una operación de E/S (como leer o
*escribir en un archivo, hacer una solicitud a una base de datos o enviar una
*solicitud HTTP) y continuar con otras tareas sin esperar a que se complete la
*operación
 */
/**
 * *1.3.5. Devoluciones de llamada (callbacks): Las devoluciones de llamada son
funciones que se registran para ejecutarse después de que se complete una
operación asincrónica
 */
/**
 * *1.3.6. Módulos y npm: utiliza un sistema de módulos basado en
CommonJS, lo que permite la modularidad y la reutilización de código
 */
/**
 * *En resumen, Node.js funciona mediante el uso de un bucle de eventos,
operaciones de E/S no bloqueantes y devoluciones de llamada. Esto permite que
Node.js maneje múltiples solicitudes y operaciones de manera eficiente, lo que lo
hace adecuado para aplicaciones en tiempo real y de alta concurrencia.
 */

/**
 * 1.4. Configuración 
 */
/**
 * 1.4.1 ¿Que es Nvm?
 * *es una herramienta que permite administrar
múltiples versiones de Node.js en un sistema
 */
/**
 * ?Funcionalidades de nvm
 */
/**
 * Instalación de versiones específicas: permite instalar versiones
específicas de Node.js en tu sistema.
 */
/**
 * Cambio de versión de Node.js: Con NVM, puedes cambiar rápidamente entre
diferentes versiones de Node.js según tus necesidades
 */
/**
 * Administración de versiones globales y locales: NVM te permite gestionar
tanto las versiones globales como las locales de Node.js
 */
/**
 * Uso de LTS (Long-Term Support) y versiones inestables: NVM te permite
instalar tanto las versiones de LTS (soporte a largo plazo) de Node.js, que son
más estables y se recomiendan para la mayoría de los proyectos, como las
versiones inestables o en desarrollo.
 */
/**
 * Interfaz de línea de comandos sencilla: NVM proporciona una interfaz de línea
de comandos sencilla y fácil de usar.
 */
/**
 * *Util nvm: NVM es especialmente útil cuando necesitas trabajar en proyectos que utilizan
diferentes versiones de Node.js o cuando deseas probar tu código en diferentes
versiones para garantizar la compatibilidad. Te brinda flexibilidad y control sobre
las versiones de Node.js en tu sistema.
 */

/**
 * Comandos para node.js y proceso para levantar el servidor (es decir usar javascript en el lado ddel servidor):
nvm list-remote //para mostrar lista de versiones disponibles
//las versiones mas estable y mejores estan con "LTS"
//la mejor version es: Latest LTS: Hydrogen, revisar el numero de esa version y tenerlo en cuenta
//el simbolo que aparece asi: -> v18.0.0 significa que ya esta instalada al version v18.0.0 de node.js

nvm --version //para saber que version hay y que version se tiene

//si la version a instalar es v18.0.0 hacer:
nvm install 18.0.0 //instala la version v18.0.0
//si le aparece error es porque debera dejar de usar alguna version que ya esta usandose, hacer lo siguiente (respira):
nvm deactivate //deja de usar node.js en caso de tenerse abierta o ejecutandose
nvm uninstall v18.0.0 //desinstala la version v18.0.0 o la que tengas instalada
//ahora si hacer:
nvm install 18.0.0 //instala la version v18.0.0, pero instala la mejor version

nvm use v18.0.0 //es para usar una cierta version, en este caso es la v18.0.0
 */

/**
 * 1.4.5. Comandos básicos de NVM ‘linux’
 */
/**
 * nvm install <version>: Este comando instala una versión específica de
Node.js. Por ejemplo, puedes usar nvm install 14.17.0 para instalar la
versión 14.17.0 de Node.js.

nvm use <version>: Este comando establece la versión especificada de
Node.js como la versión activa. Por ejemplo, puedes usar nvm use 14.17.0
para usar la versión 14.17.0 de Node.js.

nvm current: Este comando muestra la versión de Node.js que estás
utilizando actualmente.

nvm ls: Este comando lista todas las versiones de Node.js instaladas en tu
sistema.

nvm ls-remote: Este comando lista todas las versiones de Node.js
disponibles para instalar.

nvm alias <name> <version>: Este comando crea un alias para una
versión específica de Node.js. Puedes usar este alias en lugar de
especificar la versión completa. Por ejemplo, nvm alias default 14.17.0 crea
un alias llamado "default" para la versión 14.17.0 de Node.js.

nvm use <alias>: Este comando establece el alias especificado como la
versión activa de Node.js. Por ejemplo, nvm use default establece la versión
aliada "default" como la versión activa.

nvm uninstall <version>: Este comando desinstala la versión especificada
de Node.js.

nvm reinstall-packages <version>: Este comando reinstala los paquetes
npm instalados globalmente en la versión especificada de Node.js.
 */
/**
 * 1.4.6. Extensiones
 * *Thunder Client:
 * *Better Comments:
 */
/**
 * 1.5 Ejecutar archivos JavaScript en Node
 * se crea una carpeta y un archivo dentro llamado por ejemplo "main.js", abre la terminal de comandos y le da: 
 * * node main.js
 * con lo anterior se corre el programa
 * por ejemplo si en main.js esta:
 * ? console.log("Hola mundo");
 * imprimira:
 * ? Hola mundo
 */

/**
 * 1.6. Diferencias de Apis Globales JavaScript en Node
 */
/**
 * 1.6.1. global y window
 * *"window" : se utiliza en el entorno de un navegador 
 * web para hacer referencia al objeto global que representa la ventana del
 * navegador
 * *En cambio en node.js no existe "window" en este caso es "global" como su objeto global
 * proporciona un ámbito global para variables, funciones y
 * objetos en una aplicación de Node.js, lo que hace es definir variables y funciones 
 * que estarán disponibles en todos los módulos y archivos de la aplicación
 * *Para mostrar lo que representa el global se puede correr en node.js:
 * ? console.log(global);
 */

/**
 * 1.6.2. process
 * *es un objeto global que proporciona información y
control sobre el proceso actual en ejecución. Es una instancia de la clase
EventEmitter, lo que significa que puede emitir y escuchar eventos.
 */
/**
 * process.exit([código]): Un método que finaliza el proceso actual. Puedes
proporcionar un código de salida opcional como argumento para indicar el estado
de salida del proceso.
* ejemplo de uso:
* ? console.log("Terminar");
* ? process.exit();
* ? console.log("Proceso");
* al correrlo muestra en la consola:
* ? Terminar
 */
/**
 * process.env: Un objeto que contiene las variables de entorno del sistema.
Puedes acceder a estas variables para obtener información como la configuración
del sistema, rutas de archivo, claves de API, etc.
* ejemplo de uso:
* ? console.log(`Carpeta principal \n${process.env.PWD}`);
* al correrlo muestra en la consola:
* ? Carpeta principal
* ? /c/User/ma980/Desktop/abierto
 */
/**
 * process.stdin, process.stdout y process.stderr: Estos objetos permiten la
interacción con la entrada estándar (stdin), la salida estándar (stdout) y la salida
de error estándar (stderr) respectivamente. Puedes leer datos de la entrada
estándar, escribir en la salida estándar y mostrar mensajes de error en la salida de
error estándar.
 */
/**
 * process.on(evento, callback): Un método para registrar devoluciones de llamada
para manejar eventos del proceso. Puedes utilizar este método para capturar
eventos como la salida del proceso, errores no capturados, señales del sistema
operativo, etc.
 */