const log = require('node-file-logger');

const logger = (text: any) => {
  const options = {
    folderPath: './logs/',
    dateBasedFileNaming: true,
    fileNamePrefix: 'Daily_Logs_',
    fileNameExtension: '.log',
    dateFormat: 'YYYY_MM_D',
    timeFormat: 'HH:mm:ss.SSS',
    timeZone: 'Europe/Bratislava'
  };

  log.SetUserOptions(options);
  log.Info(text);
};

export default logger;
