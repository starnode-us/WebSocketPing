import ws from 'ws';
import { createServer } from 'http';

const server = createServer();

const wss = new ws.Server({ server });

wss.on('connection', (ws: ws) => {
  ws.on('message', (message: string) => {
    ws.send(`StarNode on top`);
  });
});

server.listen(8081, () => {
  console.log('Server started');
});