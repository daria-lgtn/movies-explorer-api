require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { limiter } = require('./middlewares/limiter');
const { MONGO_DB } = require('./constants');
const { errorHandler } = require('./middlewares/error');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 4000 } = process.env;
const app = express();

app.use(limiter);
app.use(cors());
app.use(express.json());
app.use(requestLogger);

mongoose.connect(`mongodb://${MONGO_DB}`);

app.use('/', require('./routes'));

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
