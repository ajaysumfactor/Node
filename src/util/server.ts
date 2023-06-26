import express,{Request,Response,NextFunction,Application,ErrorRequestHandler} from 'express';
import * as jwt from 'jsonwebtoken';
const secret:string=process.env.JWT_SECRET_KEY as string;
const refreshAccessToken=process.env.REFRESH_ACCESS_KEY as string;
interface JwtToken{
    email: string,
    password: string
}

export const generateAccessToken=(user:JwtToken)=>{
    return jwt.sign(user,secret,{expiresIn: '2m'});
}