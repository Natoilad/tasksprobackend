const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
require('dotenv').config();

const authRouter = require('./routes/api/auth');
const backgroundsRouter = require("./routes/api/backgrounds");

const { helpRouter, boardsRouter, tasksRouter } = require("./routes/api");
const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/auth', authRouter);
app.use("/api/backgrounds", backgroundsRouter);

app.use('/api', helpRouter)
app.use('/api/boards', boardsRouter)
app.use('/api/tasks', tasksRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
