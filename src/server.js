import "./env";
import {GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema"
import {sendSecretMail} from "./utils";
import "./passport";
import { authenticateJwt } from "./passport";
import {isAuthenticated} from "./middleware";

const PORT = process.env.PORT;

// no more import isAuthenticated additionally! 
const server = new GraphQLServer({schema, context:({request})=>({
    request, isAuthenticated
})

});
server.express.use(logger("dev"));
server.express.use(authenticateJwt);


server.start({port:PORT}, ()=>console.log(`Server running on port :${PORT}`));