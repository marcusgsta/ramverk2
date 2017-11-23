const request = require('supertest');
const app = require('./index');

describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test non correct path', () => {
    test('It should response a 404 with the GET method', (done) => {
        request(app).get('/wrongpath').then((response) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});