Repositorio público del proyecto Web y Mobile sobre Guia de Restaurantes - React Native.

Cómo clonar y preparar el proyecto
1) Clonar el repositorio:
1.1: Nos situamos en la ubicación donde se desee clonar el repositorio (con "cd [nombre de carpeta]" cambiamos la ubicación desde la terminal).

1.2: Usar el comando "git clone [link SSH o HTTPS]" para clonar el repositorio.

1.3: Al clonar el repositorio y situarnos en su directorio, por defecto nos sitúa en la rama principal (main).

2) Versión compatible de Node:
2.1: El proyecto corre en la versión v17.9.1 de Node. Para visualizar la versión de Node utilizamos el comando
```java
node -v 
```
En caso de tener la versión necesaria, continuar al paso 3. De lo contrario, continúe leyendo el paso 2 para ver cómo cambiar su versión de Node.

2.2: A continuación están los pasos a seguir en caso de no tenerla instalada:

Instalamos la versión
```java
nvm install 17.9.1
```
Nota: Si no instalamos ninguna otra versión de Node previamente, la versión 17.9.1 se establecerá como versión por defecto. Sin embargo, si ya instalamos alguna otra versión, la versión 17.9.1 se usará sólo durante nuestra sesión actual.

Cambiamos a la versión instalada
nvm use 17.9.1
En caso de querer que esta versión sea nuestra versión por defecto, debemos ejecutar el siguiente comando:
```java
nvm alias default 17.9.1
```

3) Instalar Expo:
3.1: Para instalar Expo, ejecutamos el comando: 
```java
npm install --global expo-cli
```
3.2: Para verificar que se instaló correctamente, ejecutamos el comando:
```java
expo --version
```

Cómo probar el proyecto

En el directorio del proyecto, se pueden correr los siguientes comandos:
```java
npm install @react-navigation/stack
npm install @react-navigation/native
npm install react-native-keyboard-aware-scroll-view
npm install react-native-snap-carousel
npx expo start
```
Para abrir el proyecto debe tener instalado Expo Go en su dispositivo móvil y escanear el código QR que se muestra en la terminal.


La página se recargará (localmente) cuando se hagan cambios.
También se podrá ver cualquier error en la consola.