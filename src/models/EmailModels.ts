import { API_KEY } from '../config/envVariable';
import { EmailContent } from '../types/emailContent';
import { Resend } from 'resend';
export class EmailModels {
	static async sendEmail({
		from,
		html,
		to,
		subject,
	}: EmailContent): Promise<string> {
		const resend = new Resend(API_KEY);

		const { error } = await resend.emails.send({
			from: from,
			to: to,
			subject: subject,
			html: html,
		});

		if (error) throw new Error(`${error.message}`);
		
		return 'Email sent successfully';
	}
}
