const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: 9000,
  path: '/peerjs',
  proxied: true
});

console.log('PeerJS server started on port 9000 with path /peerjs');
