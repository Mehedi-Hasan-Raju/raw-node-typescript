import { writeUser, readUser } from "../helpers/fileDb";
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

           const user = readUser();

          const newUser ={
            id: Date.now(),
            ...body
          };

            user.push(newUser);
            writeUser(user);


            sendJson(res, body,201);
});

addRoute("PUT", "/api/users/:id", async (req, res) => {
   const {id} = (req as any).params;
   const body = await parseBody(req);

   const user = readUser();

   const index = user.findIndex((user: any) => user.id === parseInt(id));

if (index === -1) {
    return sendJson(res, { message: "User not found" }, 404);
}

user[index] = {
    ...user[index],
    ...body
};

writeUser(user);

return sendJson(res, {
    success: true,
    message: `id ${id} user updated successfully`,
    data: user[index]
}, 200);
});
