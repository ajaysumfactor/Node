import { executeQuery } from "../Database/Connection";
export const userRestration=async(req:any,res:any)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            console.log(req.body, "in body")
            //  let { f_name, l_name, email, password, token } = req.body

            //  const sqlQuery = `insert into user(f_name,l_name,email,password,token)values('Abhay','verma','ajay@gmail.com','abhay@12345','221406')`
             const sqlQuery=`select * from user`
            

            

            let response = await executeQuery(sqlQuery)

             console.log("controller promise error", response)

             return resolve(response)

        } catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error)
            return reject(error)
        }
    })
}