//Bring in middlewares
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//Bring in routers
const ticketsRouter = require('./tickets/tickets-router');
const usersRouter = require('./users/users-router');
const rolesRouter = require('./roles/roles-router');
const commentsRouter = require('./comments/comments-router');
const tagsRouter = require('./tags/tags-router');
const statusRouter = require('./status/status-router');


//API version, not needed
const apiVersion = 'v1';


//Use express server
const server = express();


//Middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());


//Use the routers
server.use(`/api/${apiVersion}/tickets`, ticketsRouter);
server.use(`/api/${apiVersion}/users`, usersRouter);
server.use(`/api/${apiVersion}/roles`, rolesRouter);
server.use(`/api/${apiVersion}/comments`, commentsRouter);
server.use(`/api/${apiVersion}/tags`, tagsRouter);
server.use(`/api/${apiVersion}/status`, statusRouter);


//Error catcher
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});


//Export server
module.exports = server;