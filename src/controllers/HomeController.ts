import { Request, Response } from 'express';

export class HomeController {
	static async home(req: Request, res: Response) {
		res.status(200).send('Hello Word');
	}
}
