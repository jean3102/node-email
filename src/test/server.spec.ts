const request = require('supertest');
const app = require('../server/app'); // Update the path accordingly


describe('Test Express App', () => {
	test('GET / should return 200 ok', async () => {
		const response = await request(app).get('/').send();
		expect(response.statusCode).toBe(200);
	});
});
