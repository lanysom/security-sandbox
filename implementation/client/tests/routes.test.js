const request = require('supertest');
const express = require('express');
const app = require('../app');
const router = require('../routes/index');

app.use('/', router);

// Test if routes are responding as expected
describe('Good routes', () =>{

  // index
  test('responds to /', async () =>{
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200);
  });

  // about
  test('responds to /about', async () =>{
    const res = await request(app).get('/about');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200);
  });

  // admin
  test('responds to /admin', async () =>{
    const res = await request(app).get('/admin');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200);
  });

  // blog
  test('responds to /blog', async () =>{
    const res = await request(app).get('/blog');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200);
  });

  // profile
  test('responds to /profile', async () =>{
    const res = await request(app).get('/profile');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    expect(res.statusCode).toBe(200);
  });  
});
  
