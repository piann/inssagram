import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{

        getUser: (_,args,{request, isAuthenticated}) => {
            isAuthenticated(request);
            try{
                const {id} = args;
                const {user} = request;
                return prisma.user({id});
            } catch(err) {
                console.log(err);
                return null
            }
            
        }
    }
}