import express,{Request,Response,Router} from 'express';
const router = Router();
router.get('/registerUser', async (req: Request, res: Response) => { res.status(200).send("hello world") })
export default router;