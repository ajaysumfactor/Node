import express,{Request,Response,Router} from 'express';
import { userRestration } from '../Controller/userController';
import { userlogin,getAllUser } from '../Controller/userController';
import { verifyToken } from '../util/server';
const router = Router();
router.post('/registerUser', async (req: Request, res: Response) => { res.status(200).send(await userRestration(req, res)) })
router.post('/userlogin', async (req: Request, res: Response) => { res.status(200).send(await userlogin(req, res)) })
router.get('/getAllUser',verifyToken,async(req:Request,res:Response)=>{
    res.status(200).send(await getAllUser(req,res))
})
export default router;