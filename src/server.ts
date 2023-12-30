import express from 'express';
import { DOCKER_PORT } from './config/envVariable';
import { EmailRouter } from './routers/email';

const app = express();

//*config
app.use(express.json());

//*class
const Email = new EmailRouter().getRouter();

//*routers
app.use('/email', Email);

app.listen(DOCKER_PORT, () => {
	console.log(`server is running on port: ${DOCKER_PORT}`);
});
