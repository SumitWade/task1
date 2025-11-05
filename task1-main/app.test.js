const request = require('supertest');
const app = require('./app');

describe('Node.js Demo App', () => {
  // Test the main route
  test('GET / should return hello message', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from CI/CD Pipeline!');
    expect(response.body.timestamp).toBeDefined();
    expect(response.body.environment).toBeDefined();
  });

  // Test the health check endpoint
  test('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.uptime).toBeDefined();
    expect(response.body.timestamp).toBeDefined();
  });

  // Test that server starts without errors
  test('App should be defined', () => {
    expect(app).toBeDefined();
  });
});
