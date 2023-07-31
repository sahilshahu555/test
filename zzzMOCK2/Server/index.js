const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);

server.listen(8080,()=>{console.log(8080)});