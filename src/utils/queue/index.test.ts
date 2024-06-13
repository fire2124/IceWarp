import { EmailRequest } from 'src/types';
import { emailQueue, addToQueue } from '.';
import { sendEmail } from '..';

jest.mock('..', () => ({
  sendEmail: jest.fn().mockResolvedValue(true)
}));

describe('Email Queue', () => {
  beforeEach(() => {
    emailQueue.length = 0;
    jest.clearAllMocks();
  });

  let emailRequest = {
    key: 'welcome_email',
    subject: 'Welcome to Our Platform!',
    delayed_send: '2024-06-06 21:12:00',
    body_data: {
      name: 'John',
      days: 5,
      link: { label: 'Click here', url: 'https://example.com' }
    },
    email: ['john@example.com'],
    bcc: ['admin@example.com']
  };

  let emailRequest2 = {
    ...emailRequest,
    delayed_send: null
  };

  it('should add items to the queue', async () => {
    emailRequest.delayed_send = '2024-12-06 21:12:00';

    await addToQueue(emailRequest as unknown as EmailRequest);
    expect(emailQueue.length).toBe(1);
    expect(emailQueue[0].emailRequest).toEqual(emailRequest);
  });

  it('should process and send emails immediately if no delay', async () => {
    emailRequest2.delayed_send = null;

    await addToQueue(emailRequest2 as unknown as EmailRequest);
    // Wait a bit longer than 1 second
    await new Promise((resolve) => setTimeout(resolve, 1100));

    expect(sendEmail).toHaveBeenCalledWith(emailRequest2);
    expect(emailQueue.length).toBe(0);
  });

  it('should handle delayed emails correctly', async () => {
    // 2 seconds in the future
    const futureTime = new Date(Date.now() + 2000).toString();
    emailRequest.delayed_send = futureTime;
    await addToQueue(emailRequest as unknown as EmailRequest);

    // Wait 1 second, email should not be sent yet
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(sendEmail).not.toHaveBeenCalled();
    expect(emailQueue.length).toBe(1);

    // Wait another 2 seconds, email should be sent
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(sendEmail).toHaveBeenCalledWith(emailRequest);
    expect(emailQueue.length).toBe(0);
  });

  it('should remove items from the queue after sending', async () => {
    emailRequest2.delayed_send = null;
    await addToQueue(emailRequest2 as unknown as EmailRequest);

    // Wait for the queue to be processed
    await new Promise((resolve) => setTimeout(resolve, 1100));
    // Wait a bit longer than 1 second

    expect(emailQueue.length).toBe(0);
  });
});
