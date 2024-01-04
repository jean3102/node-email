import { EmailModels } from '../../models/EmailModels';

const email = {
	to: ['jeancarlos3102@gmail.com'],
	subject: 'hello world',
	html: '<strong>it works!</strong>',
};
describe('Email controller', () => {
	test('when domain is undefined', async () => {
		const emailModel = EmailModels.sendEmail({ ...email, from: '' });
		await expect(emailModel).rejects.toThrow('The domain is invalid');
	});
});
