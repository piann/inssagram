import { isAuthenticated } from "../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default{
    Mutation:{
        followUser: async(_, args, {request}) => {
            isAuthenticated(request);
            const {id} = args;
            const {user} = request;
            try{
                await prisma.updateUser({
                    where:
                    {id:user.id},
                    data:{followings:{connect:{
                        id
                    }}}
                });
                return true;
            } catch(err){
                console.log(err);
                return false;
            }
        }
    }
}