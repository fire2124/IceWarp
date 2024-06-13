import app from 'src/index';
import request from 'supertest';

describe('Test /send-email endpoint', () => {
  let requestObject = {
    key: 'task-icewarp',
    subject: 'subject',
    delayed_send: '2024-06-06 21:12:00',
    email: ['tonda@icewarp.com', 'Filip@icewarp.com'],
    bcc: ['info@icewarp.com'],
    body_data: {
      name: 'Tonda',
      days: '7',
      link: {
        label: 'click here',
        url: 'https://www.icewarp.com'
      }
    }
  };
  it('should send empty object and return 400 status code', async () => {
    const res = await request(app).post('/api/v1/send-email').send({});
    expect(res.statusCode).toEqual(400);
  });

  it('should send an email with bad dalayed_send property and return 400 status code', async () => {
    requestObject.delayed_send = '545';
    const res = await request(app)
      .post('/api/v1/send-email')
      .send(requestObject);
    expect(res.statusCode).toEqual(400);
  });

  it('should send an email with future time and return 202 status code', async () => {
    requestObject.delayed_send = '2024-12-06 21:12:00';
    const res = await request(app)
      .post('/api/v1/send-email')
      .send(requestObject);
    expect(res.statusCode).toEqual(202);
  });

  it('should send an email with empty delay time and return 200 status code', async () => {
    requestObject.delayed_send = '';
    const res = await request(app)
      .post('/api/v1/send-email')
      .send(requestObject);
    expect(res.statusCode).toEqual(200);
  });

  it('should return 400 status code when email sending fails', async () => {
    requestObject.delayed_send = '2023-12-06 21:12:00';
    const res = await request(app)
      .post('/api/v1/send-email')
      .send(requestObject);
    expect(res.statusCode).toEqual(400);
  });
});
