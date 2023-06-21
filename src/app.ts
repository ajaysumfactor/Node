import {createServer,IncomingMessage,ServerResponse} from 'http';
 
const PORT: Number =Number(process.env.PORT || '3000');

console.log(PORT);
 
const server=createServer((request:IncomingMessage,response: ServerResponse)=>{
  console.log({request});
     if(request.url=="/name"){
        if(request.method==="GET"){

            response.end("hello world")
        }else{
            response.end("Worng method for this api")
        }
    }
});
server.listen(PORT, () => console.log(`server islistining at port ${PORT}`))