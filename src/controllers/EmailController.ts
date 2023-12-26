import { Request, Response } from 'express';
export class EmailController {
	static sendEmail(req: Request, res: Response) {
		res.send('sending email');
	}
}
