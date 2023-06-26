import { executeQuery } from "../Database/Connection";
import bcrypt from 'bcrypt';
import { generateAccessToken, refreshAccessToken } from "../util/server";
export const userRestration = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(req.body, "in body")
            let { f_name, l_name, email, password, token } = req.body




            //  const sqlQuery = `insert into user(f_name,l_name,email,password,token)values('${f_name}','${l_name}','${email}','${password}','${token}')`
            //  const sqlQuery=`select * from user`
            const findData = `select * from user where email='${email}'`

            // const sqlQuery = `SELECT * FROM user as a join info as b  on a.email= b.email;`





            let getRecord: any = await executeQuery(findData)


            if (getRecord.length > 0) {
                res.status(400).send({ message: "user is already registered please login" });
            }

            const salt = await bcrypt.genSalt();
            const hashed = await bcrypt.hash(password, salt);
            console.log({ hashed });
            const sqlQuery = `insert into user(f_name,l_name,email,password,token)values('${f_name}','${l_name}','${email}','${hashed}','${token}')`
            let response: any = await executeQuery(sqlQuery)


            console.log("controller promise error", response)

            return resolve(response)

        } catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error)
            return reject(error)
        }
    })
}




export const userlogin = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password } = req.body;
            const getRecord = `select * from user where email='${email}'`
            let resultSet: any = await executeQuery(getRecord);
            if (resultSet.length == 0) {
                return res.status(404).send({ message: "user not found please register and try again to login" })

            }
            const match: boolean = await bcrypt.compare(password, resultSet[0].password);
            if (match == false) return res.status(400).send("Entered Password is Incorrect")

            let user: any = { email: email as string, password: password as string }
            let acessToken = generateAccessToken(user)
            let refreshToken = refreshAccessToken({ user: user });
            console.log("refreshAccessToken---", refreshToken);
            return resolve({ message: "User Sucessfully Logged in", data: resultSet, acessToken: acessToken, refreshToken: refreshToken })

        }
        catch (error) {
            console.log("new promise error", error);
        }
    })
}


export const getAllUser = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const getRecord = `select * from user;`
            const resultset: any = await executeQuery(getRecord);
            return resolve(resultset);
        }
        catch (error) {
            console.log("peomise error--->", error);
        }
    })
}