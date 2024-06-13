import { NextFunction, Request, Response } from 'express';
import logger from '../../utils/logger';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  console.log('middleware: ', data);
  logger(`Incoming call: ${req.method}, on path: ${req.path}, IP: ${req.ip}`);
  logger(`Body: ${JSON.stringify(req.body)})`);
  logger(`---------------`);
  next();
};

export default logMiddleware;
