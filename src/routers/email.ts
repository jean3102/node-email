import { Router } from 'express';
import { EmailController } from '../controllers/EmailController';

export class EmailRouter {
	#router = Router();

	constructor() {
		this.#router.get('/send', EmailController.sendEmail);
	}

	getRouter() {
		return this.#router;
	}
}
