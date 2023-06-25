import { executeQuery } from "../Database/Connection";
import bcrypt from 'bcrypt';

export const userRestration=async(req:any,res:any)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            console.log(req.body, "in body")
             let { f_name, l_name, email, password, token } = req.body




            //  const sqlQuery = `insert into user(f_name,l_name,email,password,token)values('${f_name}','${l_name}','${email}','${password}','${token}')`
            //  const sqlQuery=`select * from user`
            const findData=`select * from user where email='${email}'`

            // const sqlQuery = `SELECT * FROM user as a join info as b  on a.email= b.email;`
            
            

            

            let getRecord:any = await executeQuery(findData)


            if(getRecord.length>0){
                res.status(400).send({message: "user is already registered please login"});
            }

            const salt=await bcrypt.genSalt();
            const hashed=await bcrypt.hash(password,salt);
            console.log({hashed});
            const sqlQuery = `insert into user(f_name,l_name,email,password,token)values('${f_name}','${l_name}','${email}','${hashed}','${token}')`
            let response:any = await executeQuery(sqlQuery)


             console.log("controller promise error", response)

             return resolve(response)

        } catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error)
            return reject(error)
        }
    })
}