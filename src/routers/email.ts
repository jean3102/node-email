import { Router } from 'express';
import { EmailController } from '../controllers/EmailController';
import { validateParams } from '../middlewares/validateParams';

export class EmailRouter {
	#router = Router();

	constructor() {
		this.#router.post('/send', validateParams, EmailController.handleEmail);
	}

	getRouter() {
		return this.#router;
	}
}
