import { EmailModels } from '../../models/EmailModels';

const email = {
	to: ['jeancarlos3102@gmail.com'],
	subject: 'hello world',
	html: '<strong>it works!</strong>',
};
describe('Email controller', () => {
	test('when domain is undefined', async () => {
		try {
			await EmailModels.sendEmail({ ...email, from: '' });
		} catch (error) {
			if (error instanceof Error) {
				expect(error.message).toBe('The domain is invalid');
			}
		}
	});
});
