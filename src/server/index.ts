import { DOCKER_PORT } from '../config/envVariable';
import app from './app';

app.listen(DOCKER_PORT, () => {
	console.log(`server is running on port: ${DOCKER_PORT}`);
});

export default app;
