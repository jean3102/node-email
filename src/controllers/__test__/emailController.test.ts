import request from 'supertest';
import app from '../../server/app';

const email = {
	to: ['jeancarlos3102@gmail.com'],
	subject: 'hello world',
	html: '<strong>it works!</strong>',
};

describe('Email controller', () => {
	test('should send an email successfully', async () => {
		const response = await request(app).post('/email/send').send(email);
		expect(response.statusCode).toBe(200);
	});

	test('Handle error when send email', async () => {
		const response = await request(app)
			.post('/email/send')
			.send({ ...email, to: ['guest@gmail.com'] });
		expect(response.statusCode).toBe(500);
	});

	test('validateParams', async () => {
		const response = await request(app).post('/email/send').send({});
		expect(response.statusCode).toBe(400);
	});

	test('when recipient is undefined', async () => {
		const response = await request(app)
			.post('/email/send')
			.send({ ...email, to: [] });
		expect(response.statusCode).toBe(400);
	});

	test('when subject is undefined', async () => {
		const response = await request(app)
			.post('/email/send')
			.send({ ...email, subject: '' });
		expect(response.statusCode).toBe(400);
	});

	test('when html is undefined', async () => {
		const response = await request(app)
			.post('/email/send')
			.send({ ...email, html: '' });
		expect(response.statusCode).toBe(400);
	});
});
