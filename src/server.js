import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
require('dotenv').config();

const app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT;
// port === undefined => port = 8000

app.listen(port, () => {
    console.log('Backend Nodejs is runing on the port : ' + port);
});