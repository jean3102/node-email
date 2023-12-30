import { config } from 'dotenv';
config();

const NODE_PORT = process.env.NODE_LOCAL_PORT;
const DOCKER_PORT = process.env.NODE_DOCKER_PORT;
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;

export { NODE_PORT, DOCKER_PORT, API_KEY, DOMAIN };
