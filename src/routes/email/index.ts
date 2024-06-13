import { Request, Response, Router } from 'express';
import logMiddleware from '../../middlewares/logger';
import { addToQueue } from '../../utils';
import { StatusEnum } from '../../messages';

const router: Router = Router();
router.use(logMiddleware);
router.post('/send-email', async (req: Request, res: Response) => {
  const { key, subject, delayed_send, body_data, email } = req.body;

  if (!key || !subject || !body_data || !email) {
    return res.status(400).send(StatusEnum.RequiredFieldsError);
  }

  if (
    delayed_send !== null &&
    delayed_send !== undefined &&
    delayed_send.length !== 0
  ) {
    const delayDate = new Date(delayed_send);
    const now = new Date();

    if (isNaN(delayDate.valueOf())) {
      return res.status(400).send(StatusEnum.InvalidDateError);
    }

    // from miliseconds to seconds
    const delay = (delayDate.valueOf() - now.valueOf()) / 1000;

    if (delay > 0) {
      addToQueue(req.body);
      return res.status(202).send(StatusEnum.EmailScheduled);
    } else {
      return res.status(400).send(StatusEnum.DelayedError);
    }
  } else {
    addToQueue(req.body);
    return res.status(200).send(StatusEnum.EmailSent);
  }
});

export default router;
