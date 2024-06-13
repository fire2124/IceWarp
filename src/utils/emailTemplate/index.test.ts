import { compileEmailTemplate } from '.';

describe('compileEmailTemplate', () => {
  it('should compile the email template with provided data', () => {
    const body_data = {
      name: 'John Doe',
      days: 5,
      link: {
        url: 'http://example.com',
        label: 'click here'
      }
    };

    const expectedOutput = `
      <p>Hello John Doe,</p>
    <p>You have 5 days until your task expires.</p>
    <p>Please <a href="http://example.com">click here</a>.</p>
    `;

    const result = compileEmailTemplate(body_data);
    expect(result.trim()).toEqual(expectedOutput.trim());
  });

  it('should handle missing optional fields gracefully', () => {
    const body_data = {
      name: 'Jane Doe',
      days: 3,
      link: {
        url: '',
        label: ''
      }
    };

    const expectedOutput = `
      <p>Hello Jane Doe,</p>
    <p>You have 3 days until your task expires.</p>
    <p>Please <a href=""></a>.</p>
    `;

    const result = compileEmailTemplate(body_data);
    expect(result.trim()).toEqual(expectedOutput.trim());
  });
});
