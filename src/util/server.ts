import express,{Request,Response,NextFunction,Application,ErrorRequestHandler} from 'express';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
const secret:string=process.env.JWT_SECRET_KEY as string;
const refreshToken=process.env.REFRESH_ACCESS_KEY as string;
interface JwtToken{
    email: string,
    password: string
}

export const generateAccessToken=(user:JwtToken)=>{
    return jwt.sign(user,secret,{expiresIn: '2m'});
}

interface refreshJwtToken{
    user: object
}

export const refreshAccessToken=(tokenUser: refreshJwtToken)=>{
 return jwt.sign(tokenUser.user,refreshToken)
}


export const verifyToken=(req:Request,res:Response,next:NextFunction)=>{
    console.log({req});
    if(req.headers['authorization']?.split(' ')[1]==null){
        return res.sendStatus(401);

    }

    jwt.verify(req.headers['authorization']?.split(' ')[1],secret,(err:any,user:any)=>{
        if(err){
            return res.sendStatus(403);
        }
        next();
    })
}



export const verifyRefresh=(email:string,token:string):boolean=>{
  try{
  const decodedData=jwt.verify(token,refreshToken) as JwtPayload;
  return decodedData.email===email;
  }
  catch(error)
{
    return false;
}
}

