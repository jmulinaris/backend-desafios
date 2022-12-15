Comandos utilizados:
* **Nodemon:**
    1. Fork: nodemon .
    2. Cluster: nodemon . -m cluster
* **Forever:**
    1. Fork: forever start server.js --watch
    2. Listar procesos por forever: forever list
    3. Listar procesos por sistema operativo: ps
* **PM2:**
    1. Fork: pm2 start server.js  --watch 
    2. Cluster: pm2 start server.js --watch -i max
    3. Listar procesos por pm2: pm2 list
    4. Listar procesos por sistema operativo: ps