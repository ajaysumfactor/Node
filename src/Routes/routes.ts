import express,{Request,Response,Router} from 'express';
import { userRestration } from '../Controller/userController';
import { userlogin } from '../Controller/userController';
const router = Router();
router.post('/registerUser', async (req: Request, res: Response) => { res.status(200).send(await userRestration(req, res)) })
router.post('/userlogin', async (req: Request, res: Response) => { res.status(200).send(await userlogin(req, res)) })

export default router;