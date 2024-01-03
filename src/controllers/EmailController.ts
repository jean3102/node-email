import { Request, Response } from 'express';
import { EmailContent } from '../types/emailContent';
import { isValidEmail, isValidHtml } from '../utils/emails';
import { EmailModels } from '../models/EmailModels';
import { DOMAIN } from '../config/envVariable';

export class EmailController {
	static async handleEmail(req: Request, res: Response) {
		const { to, subject, html }: EmailContent = req.body;

		if (!isValidEmail(to))
			return res.status(400).send('Invalid recipient email address');

		if (subject === '' || typeof subject !== 'string')
			return res.status(400).send('Invalid email subject');

		if (!isValidHtml(html)) return res.status(400).send('Invalid HTML content');
		
		try {
			const result = await EmailModels.sendEmail({ ...req.body, from: DOMAIN });
			res.status(200).send(result);
		} catch (error) {
			if (error instanceof Error) {
				res.status(500).send(error.message);
			}
		}
	}
}
