export enum StatusEnum {
  EmailScheduled = 'Email scheduled',
  DelayedError = 'delayed_send must be a future date',
  EmailSent = 'Email sent',
  RequiredFieldsError = 'Missing required fields',
  InvalidDateError = 'Invalid delayed_send date'
}
