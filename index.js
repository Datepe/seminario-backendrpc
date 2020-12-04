
const connectDB = require('./DB/connection');
const Person = require('./models/Person')

var WebSocketServer = require('rpc-websockets').Server
var server = new WebSocketServer({
  port: 8080,
  host: '192.168.1.5'
})
 
// register an RPC method
server.register('listaPersonas', async () => {
  const lista = [];
  await Person.find().exec().then(x => {
    x.forEach(data => {
      lista.push(data)
    })
  })
  return lista;
})
 


connectDB();