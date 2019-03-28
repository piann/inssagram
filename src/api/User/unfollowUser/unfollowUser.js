import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middleware";

export default{
    Mutation:{
        unfollowUser:async(__, args, {request})=>{
            isAuthenticated(request);
            const {id} = args;
            const {user} = request;
            try{
                await prisma.updateUser({
                    where:
                    {id:user.id},
                    data:{followings:{
                        disconnect:{
                            id
                        }
                    }}
                });
                return true;
            } catch (err) {
                console.log(err);
                return false
            }

        }

    }
}