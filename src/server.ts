import express from 'express';
import { DOCKER_PORT } from './config/envVariable';
import { EmailRouter } from './routers/email';

const app = express();

//*class
const email = new EmailRouter().getRouter();

//*routers
app.use('/email', email);

app.listen(DOCKER_PORT, () => {
	console.log(`server is running on port: ${DOCKER_PORT}`);
});
