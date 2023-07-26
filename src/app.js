require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { NotFoundError } = require('./errors/NotFound');
const { auth } = require('./middlewares/auth');
const { errorHandler } = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 4000 } = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use('/', require('./routes/auth'));

app.use(auth);
app.use('/users', require('./routes/user'));
app.use('/movies', require('./routes/movie'));

app.use((req, res, next) => next(new NotFoundError(`Некорректный маршрут${req.url}`)));

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
