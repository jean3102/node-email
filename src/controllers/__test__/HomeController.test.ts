import request from 'supertest'
import app from '../../server/app';

describe('Home controller', () => {
	
	test('Get /', async () => {
		const response = await request(app).get('/').send()
		expect(response.statusCode).toBe(200)
		expect(response.text).toBe('Hello Word')
	});
});
