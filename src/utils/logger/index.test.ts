import logger from '.';
const log = require('node-file-logger');

jest.mock('node-file-logger', () => ({
  SetUserOptions: jest.fn(),
  Info: jest.fn()
}));

describe('logger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should configure the logger with the correct options', () => {
    const text = 'Test log message';
    logger(text);

    const expectedOptions = {
      folderPath: './logs/',
      dateBasedFileNaming: true,
      fileNamePrefix: 'Daily_Logs_',
      fileNameExtension: '.log',
      dateFormat: 'YYYY_MM_D',
      timeFormat: 'HH:mm:ss.SSS',
      timeZone: 'Europe/Bratislava'
    };

    expect(log.SetUserOptions).toHaveBeenCalledWith(expectedOptions);
  });

  it('should log the given text', () => {
    const text = 'Test log message';
    logger(text);

    expect(log.Info).toHaveBeenCalledWith(text);
  });

  it('should handle different types of log messages', () => {
    const textObject = { message: 'Test log object message' };
    logger(textObject);

    expect(log.Info).toHaveBeenCalledWith(textObject);

    const textNumber = 12345;
    logger(textNumber);

    expect(log.Info).toHaveBeenCalledWith(textNumber);

    const textBoolean = true;
    logger(textBoolean);

    expect(log.Info).toHaveBeenCalledWith(textBoolean);
  });

  it('should log error if log.Info throws an error', () => {
    const text = 'Test log message';

    log.Info.mockImplementationOnce(() => {
      throw new Error('Test error');
    });

    expect(() => {
      logger(text);
    }).toThrow();

    expect(log.Info).toHaveBeenCalledWith('Test log message');
  });
});
