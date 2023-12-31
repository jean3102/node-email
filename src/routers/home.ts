import { Router, Request, Response } from 'express';
import { HomeController } from '../controllers/HomeController';

export class HomeRouter {
	#router = Router();

	constructor() {
		this.#initializeRoutes();
	}

	#initializeRoutes() {
		this.#router.get('/', HomeController.home);
	}

	getRouter() {
		return this.#router;
	}
}
