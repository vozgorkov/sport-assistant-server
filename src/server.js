const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const MONGO_URL = 'mongodb+srv://vozgorkovalexey:iqlwtpvheQ4Ww2Ms@sport-assistant-cluster.1bhjskt.mongodb.net';

async function startServer() {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
}

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (error) => {
  console.error(error);
});

startServer();
