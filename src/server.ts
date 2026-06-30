import http, {IncomingMessage, Server, ServerResponse} from "http";
import config from "./config";

const server:Server = http.createServer(
    (req: IncomingMessage,res: ServerResponse) =>{
        console.log("server is rinning")
       
        //root route
        if(req.url == "/" && req.method == 'GET'){
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify({
                message: "Hello from nodejs with typescript...",
                 path: req.url}));
            
        }

        //health route
        if(req.url == "/api" && req.method == 'GET') {
            res.writeHead(200, {"content-type": "application/json"});
            res.end(JSON.stringify({
                message: "Health status is ok",
                 path: req.url}));
            
        }


        if(req.url == "/api/users" && req.method == 'POST') {
            // const user = {
            //     id:1,
            //     name: "Raju"
            // }
            //  res.writeHead(200, {"content-type": "application/json"});
            // res.end(JSON.stringify(user));

            let body = "";
            //listen for data chunks
            req.on("data", chunk =>{
                body += chunk.toString();
            });

            //handle end of data
            req.on("end", () => {
               try{
                 const parseBody = JSON.parse(body);
                // Process the user data (e.g., save to database)
                res.writeHead(201, {"content-type": "application/json"});
                res.end(JSON.stringify({message: "User created", user: parseBody}));

               }catch(err: any){
                console.log(err?.message);
               }
              
                
            });
        }
})

server.listen(config.port, () => {
    console.log(`server is running on port ${config.port}`);
});
