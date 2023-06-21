// import {createServer,IncomingMessage,ServerResponse} from 'http';
 
// const PORT: Number =Number(process.env.PORT || '3000');

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










// fs--module-->to handle the file system
import * as path from 'path'
// console.log({path});
console.log(__dirname);//print current directory in which currently am i.(E:\INTERNSHIP\NODE\express-ts\src)
const dirPath=__dirname;
console.log(__filename);//print the name of the file in which i have open(E:\INTERNSHIP\NODE\express-ts\src\app.ts)
let newfilePath=path.join(dirPath,"text.js");//E:\INTERNSHIP\NODE\express-ts\src\text.js
console.log(newfilePath);
let extName=path.extname("E:\INTERNSHIP\NODE\express-ts\src\text.js");
console.log(extName);//.js
let baseName=path.basename("E:/INTERNSHIP/NODE/express-ts/src/text.js");
console.log(baseName);//text.js
