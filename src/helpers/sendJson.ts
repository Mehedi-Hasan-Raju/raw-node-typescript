import { ServerResponse } from "http";

function sendJson(res: ServerResponse , data: any, statusCode: number){
    res.writeHead(statusCode, {"content-type": "application/json"});
    res.end(JSON.stringify(data));
}

export default sendJson;