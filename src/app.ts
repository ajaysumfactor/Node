import * as url from "url";
import * as path from 'path';
import * as fs from 'fs';
import * as uc from 'upper-case';


import {createServer,IncomingMessage,ServerResponse} from 'http';

 
const PORT: Number =Number(process.env.PORT || '3000');

// console.log(PORT);
 
// const server=createServer((request:IncomingMessage,response: ServerResponse)=>{
//   console.log({request});
//      if(request.url=="/name"){
//         if(request.method==="GET"){

//             response.end("hello world")
//         }else{
//             response.end("Worng method for this api")
//         }
//     }
// });
// server.listen(PORT, () => console.log(`server islistining at port ${PORT}`))










// path--module-->to handle path of system
// // console.log({path});
// console.log(__dirname);//print current directory in which currently am i.(E:\INTERNSHIP\NODE\express-ts\src)
// const dirPath=__dirname;
// console.log(__filename);//print the name of the file in which i have open(E:\INTERNSHIP\NODE\express-ts\src\app.ts)
// let newfilePath=path.join(dirPath,"text.js");//E:\INTERNSHIP\NODE\express-ts\src\text.js
// console.log(newfilePath);
// let extName=path.extname("E:\INTERNSHIP\NODE\express-ts\src\text.js");
// console.log(extName);//.js
// let baseName=path.basename("E:/INTERNSHIP/NODE/express-ts/src/text.js");
// console.log(baseName);//text.js


// // fs module--> to handle file system
// import * as fs from 'fs';
// // write to a file
// let filePath=path.join(__dirname,"file.txt");
// console.log(filePath);
// //C-create
// //it creates file if it does not exists else it override
// fs.writeFileSync(filePath,"Hello I am a text file ");

// // read file
// const readFile = fs.readFileSync(filePath,'utf-8' );
// console.log(readFile);

// // //U-update
// fs.appendFileSync(filePath,"\nNewly added content");
// console.log("After update : ")
// console.log(fs.readFileSync(filePath,'utf-8'));

// //delete
// //delete
// fs.unlinkSync(filePath);




 
 
  
// const server=createServer((request:IncomingMessage,response: ServerResponse)=>{
//   console.log({request});
//      if(request.url=="/address"){
//         if(request.method==="GET"){

//           var adr = 'http://localhost:8080/default.htm?year=2017&month=february&weather=summer';
        
//           var q = url.parse(adr, true);
  
//           console.log("data", q)
//           response.end("success");
//         }else{
//             response.end("Worng method for this api")
//         }
//     }
//     else{
//       response.end("Please enter valid route");
//     }
// });
// server.listen(PORT, () => console.log(`server islistining at port ${PORT}`))


/*NPM*/
// const server=createServer((request:IncomingMessage,response: ServerResponse)=>{
//   console.log({request});
//      if(request.url=="/address"){
//         if(request.method==="GET"){
          
//           response.end(uc.upperCase("Hello World!"));
//         }else{
//             response.end("Worng method for this api")
//         }
//     }
//     else{
//       response.end("Please enter valid route");
//     }
// });
// server.listen(PORT, () => console.log(`server islistining at port ${PORT}`))

/*Events */

// import { EventEmitter } from 'events';
// const eventBroker = new EventEmitter();

// eventBroker.on('event-1', () => {
//     console.log("event 1 is fired")
// })

// eventBroker.on('event-2', (ar1, ar2) => {
//     console.log(`event 2 is fired ${ar1} ,${ar2}`)
// })
// eventBroker.emit('event-1')
// eventBroker.emit('event-2', 'hello', 'world')

/*upload files*/
 
import multer from 'multer';
import express, { Request, Response, NextFunction } from 'express';
const storage = multer.diskStorage({
  destination(req, file, callback) {
      callback(null, './src')
  },
  filename(req, file, callback) {
      callback(null, file.originalname)
  },
})


const upload = multer({ storage: storage })

const app=express();

app.get('/uploadFile', upload.single('profile'), (req: Request, res: Response, next: NextFunction) => {

  try {
      const file = req.file;
      console.log("🚀 ~ file: app.ts:46 ~ app.get ~ file:", file)
      res.status(200).send("file is sucessfully saved")
  } catch (error) {
      console.log("🚀 ~ file: app.ts:51 ~ app.get ~ error:", error)
  }
})
app.listen(3000);





