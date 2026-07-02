import parseBody from "../helpers/parseBody";
import addRoute from "../helpers/RouteHandler";
import sendJson from "../helpers/sendJson";

addRoute("GET", "/",(req, res) =>{
               sendJson(res, {
                message: "Hello from nodejs with typescript...",
                 path: req.url,
            }, 200);
});

addRoute("GET", "/api",(req, res) =>{
   sendJson(res, {
   message: "Health status is ok",
   path: req.url,
   }, 200);  
})

addRoute("POST", "/api/users", async (req, res) => {
          const body = await parseBody(req);
            sendJson(res, body,201);
});