import { pushController } from '../controllers/push.controller';
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.post('/send', async (req: Request, res: Response) => {
  try {
    await pushController(req, res);
  } catch (error) {
    res.status(500).send({
      error: `/send route error: ${error}`,
    });
  }
});

export default router;
