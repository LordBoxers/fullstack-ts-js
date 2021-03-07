const EventEmitter = require('events');

// Raise an event
const Logger = require('./logger.js');
const logger = new Logger();
logger.log('message');

// Register a listener
logger.on('messageLogged', (e) => {
    console.log('Listener Called', e);
});

logger.log('message');