import { API_KEY } from '../config/envVariable';
import { EmailContent } from '../types/emailContent';
import { Resend } from 'resend';
export class EmailModels {
	static async sendEmail(email: EmailContent): Promise<string> {
		const resend = new Resend(API_KEY);
		const { from, to, subject, html }: EmailContent = email;

		const { data, error } = await resend.emails.send({
            from: from,
			to: to,
			subject: subject,
			html: html,
		});
        console.log(`🚀 ------------ error:`, error)
		console.log(`🚀 ------------ data:`, data);

		if (error) throw new Error(`Error sending email: ${error}`);
		return 'Email sent successfully';
	}
}
