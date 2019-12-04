const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

// custom middleware
function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl}`);
  next();
};

function gatekeeper(req, res, next) {
  if (req.password === 'mellon') {
    next()
  } else {
    res.status(401)
      .json({ message: 'You shall not pass!' })
  }
}

// middleware
server.use(helmet()); // > this is how to apply middleware globally
server.use(express.json());
server.use(logger);


// endpoints
server.use('/api/hubs', helmet(), hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

server.get('/echo', (req, res) => {
  res.send(req.headers)
});

server.get('/area51', helmet(), gatekeeper(), (req, res) => {
  res.send(req.headers)
});

module.exports = server;
