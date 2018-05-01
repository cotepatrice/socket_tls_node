const tls = require('tls');
const fs = require('fs');

const options = {

  // These are necessary only if using the client certificate authentication (so yeah, you need them)
  key: fs.readFileSync('client-private-key.pem'),
  cert: fs.readFileSync('client-certificate.pem'),  

  ca: [ fs.readFileSync('../server/server-cert.pem') ]
};

var socket = tls.connect(8000, 'LAPTOP-HFS2AU1V', options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});
socket.setEncoding('utf8');
socket.on('data', (data) => {
  console.log(data);
});

socket.on('end', () => {
  console.log('Ended')
});