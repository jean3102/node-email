import express from 'express';
import { EmailRouter } from '../routers/email';
import { HomeRouter } from '../routers/home';

const app = express();

//*config
app.use(express.json());

//*class
const Home = new HomeRouter().getRouter();
const Email = new EmailRouter().getRouter();

//*routers
app.use('/', Home);
app.use('/email', Email);

export default app;
