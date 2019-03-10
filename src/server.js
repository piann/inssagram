require("dotenv").config();
import {GraphQLServer} from "graphql-yoga";


const PORT = process.env.PORT;

const typeDefs = `
    type Query{
        hello: String!
    }
`;

const resolvers = {
    Query:{
        hello : () => "Hi" 
    }
}

const server = new GraphQLServer({typeDefs, resolvers});

server.start({port:PORT}, ()=>console.log(`Server running on port :${PORT}`));