import express,{Request,Response,Router} from 'express';
import { userRestration } from '../Controller/userController';
const router = Router();
router.get('/registerUser', async (req: Request, res: Response) => { res.status(200).send(await userRestration(req, res)) })
export default router;