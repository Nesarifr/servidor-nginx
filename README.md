# servidor-nginx
Servidor proxy con utilización de nginx

## :scroll: Consigna:

Configurar Nginx para balancear cargas de nuestro servidor de la siguiente manera:
Redirigir todas las consultas a /api/randoms a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster.
El resto de las consultas, redirigirlas a un servidor individual(FORK) escuchando en el puerto 8080.
Verificar que todo funcione correctamente.

# Ejecucion y pruebas:

## Ejecucion:
Una vez clonado el repositorio e instalado los modulos, habria que ejecutar el Script.

Adjunto informacion de los scripts en el package.json: 

<pre><code>{
 "scripts": {
    "dev": "nodemon ./server.js -p 8080",
    "dev-cluster": "nodemon ./server.js -p 8080 -m CLUSTER",
    "create": "node ./src/scripts/createTable.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel-node": "babel ./server.js -o ./index.js",
    "start": "node ./server.js",
    "pm2-fork": "pm2 start index.js",
    "pm2-cluster": "pm2 start index.js -i 0",
    "nginx-node-cluster": "node ./server.js -p 8081 -m CLUSTER",
    "nginx-node-fork": "node ./server.js -p 8080"
  }
}</code></pre>

## 1º   "nginx-node-cluster"
## 2º   "nginx-node-fork"
## 3º   Ejecuto nginx.exe

Para realizar la prueba, en el navegador escribo la ruta "/api/randoms" para verificar que utiliza el puerto 8081 con los cluster. 


### :computer: Herramientas utilizadas:
:ballot_box_with_check: Express
:ballot_box_with_check: Pm2
:ballot_box_with_check: Nginx
:ballot_box_with_check: VScode
:ballot_box_with_check: Handlebars
:ballot_box_with_check: MariaDB
:ballot_box_with_check: Babel
