import "./env";
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema"
import {sendSecretMail} from "./utils";
import "./passport";
import { authenticateJwt } from "./passport";


const PORT = process.env.PORT;

const server = new GraphQLServer({schema, context:({request})=>({
    request
})

});
server.express.use(logger("dev"));
server.express.use(authenticateJwt);


server.start({port:PORT}, ()=>console.log(`Server running on port :${PORT}`));