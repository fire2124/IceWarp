export type EmailRequest = {
  key: string; // name of email template
  subject: string; // email subject
  delayed_send?: string | null;
  body_data: Data;
  email: string[]; //array of target email addresses
  bcc: string[]; // array of hidden copy email addresses
};

export type Data = {
  name: string;
  days: Number;
  link: Link;
};

export type Link = {
  label: string;
  url: string;
};

export type Auth = {
  user: string;
  pass: string;
};

export type MailOptions = {
  from: string;
  to: string;
  bcc: string;
  subject: string;
  html?: string;
};

export type EmailQueueItem = {
  emailRequest: EmailRequest;
  sendTime: number;
};
