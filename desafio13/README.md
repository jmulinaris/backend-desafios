Comandos utilizados:
  1. Nodemon: 
    a. Fork: nodemon .
    b. Cluster: nodemon . -m cluster
  2. Forever:
    a. Fork: forever start server.js --watch
    b. Cluster: forever start server.js -m cluster --watch
    c. Listar procesos: forever list
    d. Finalización: forever stopall
  3. PM2
    a. Fork: pm2 start server.js  --watch 
    b. Cluster: pm2 start server.js --watch -i max
    c. Listar procesos: pm2 list
    d. Finalización: pm2 stop all