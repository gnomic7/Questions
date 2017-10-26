const server = require('net').createServer();
const very = require('../very');
let counter = 0;
const sockets = {};

const avoidVery = input => {
  match = /(very\s(\w+))/ig.exec(input);
  const replacement = match ? match[2] : null;
  if (replacement && Object.keys(very).includes(replacement)) {
    return input.replace(/very\s\w+/, very[replacement]);
  }
  return input;
};

server.on('connection', socket => {
  socket.id = counter++;
  socket.write(`Please enter your name to begin: `);
  socket.on('data', data => {
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      socket.write(`Welcome ${socket.name}:\n`);
      sockets[socket.id] = socket;
      return;
    }

    Object.entries(sockets).forEach(([, eachSock]) => {
      eachSock.write(` ${socket.name} says: `);
      eachSock.write(avoidVery(data));
    });
  });

  socket.on('end', (err) => {
    delete sockets[socket.id];
  });
  socket.setEncoding('utf8');

});

server.listen(8001, () => console.log('Server listening on port 8001'));