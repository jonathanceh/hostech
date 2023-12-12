import express from 'express';
import routes from './interfaces/routes';
import config from './config/config';

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => {});