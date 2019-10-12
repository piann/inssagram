import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{

        getUser: (_,args,{request, isAuthenticated}) => {
            isAuthenticated(request);
            try{
                const {userName} = args;
                const {user} = request;
                return prisma.user({userName});
            } catch(err) {
                console.log(err);
                return null
            }
            
        }
    }
}