import Handlebars from 'handlebars';
import { Data } from '../../types';

// Email template
const emailTemplate = `
    <p>Hello {{name}},</p>
    <p>You have {{days}} days until your task expires.</p>
    <p>Please <a href="{{link.url}}">{{link.label}}</a>.</p>
`;

export const compileEmailTemplate = (body_data: Data) => {
  const template = Handlebars.compile(emailTemplate);
  const html = template(body_data);
  console.log('Template: ', html);
  return html;
};
