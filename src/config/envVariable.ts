import { config } from 'dotenv';
config();

export const NODE_PORT = process.env.NODE_LOCAL_PORT;
export const DOCKER_PORT = process.env.NODE_DOCKER_PORT;
export const API_KEY = process.env.API_KEY;
