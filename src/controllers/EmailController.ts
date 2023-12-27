import { Request, Response } from 'express';
import { EmailContent } from '../types/emailContent';
import { isValidEmail, isValidHtml } from '../utils/emails';
import { EmailModels } from '../models/EmailModels';
export class EmailController {
	static async handleEmail(req: Request, res: Response) {
		const { from, to, subject, html }: EmailContent = req.body;

		if (!isValidEmail(from.trim()))
			return res.status(400).send('Invalid sender email address');

		for (const email of to) {
			if (!isValidEmail(email.trim()))
				return res.status(400).send('Invalid recipient email address');
		}

		if (subject.trim() === '')
			return res.status(400).send('Invalid email subject');

		if (!isValidHtml(html)) return res.status(400).send('Invalid HTML content');

		try {
			const result = await EmailModels.sendEmail(req.body);
			console.log(`🚀 ------------ result:`, result);
			res.status(200).send(result);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).send(error.message);
			} else {
				res.status(500).send('Internal server error');
			}
		}
	}
}
