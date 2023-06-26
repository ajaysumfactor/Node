import express,{Request,Response,Router} from 'express';
import { userRestration } from '../Controller/userController';
import { userlogin,getAllUser,refresh } from '../Controller/userController';
import { verifyToken } from '../util/server';
const router = Router();
router.post('/registerUser', async (req: Request, res: Response) => { res.status(200).send(await userRestration(req, res)) })
router.post('/userlogin', async (req: Request, res: Response) => { res.status(200).send(await userlogin(req, res)) })
router.get('/getAllUser',verifyToken,async(req:Request,res:Response)=>{
    res.status(200).send(await getAllUser(req,res))
})
router.post('/refresh', async (req: Request, res: Response) => { res.status(200).send(await refresh(req, res)) })

export default router;