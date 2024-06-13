import { EmailQueueItem, EmailRequest } from '../../types';
import { sendEmail } from '..';

export const emailQueue: EmailQueueItem[] = [];

export const addToQueue = async (emailRequest: EmailRequest) => {
  const sendTime = emailRequest.delayed_send
    ? new Date(`${emailRequest.delayed_send}`).getTime()
    : Date.now();
  emailQueue.push({ emailRequest, sendTime });
  await processQueue();
};

const processQueue = async () => {
  const now = Date.now();

  emailQueue.forEach(async (item) => {
    if (item.sendTime <= now) {
      // Simulate sending email
      await sendEmail(item.emailRequest);
      // Remove from queue
      emailQueue.splice(emailQueue.indexOf(item), 1);
    }
  });
  // Check the queue every second
  setTimeout(processQueue, 1000);
};
