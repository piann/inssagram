// This file is for computed field
import { prisma } from "../../../generated/prisma-client";

export default{
    User:{
        fullName : parent => `${parent.firstName} ${parent.lastName}`,
        isFollowing : async (parent, args, {request})=> {
            const {user} = request;
            try{
                return prisma.$exists.user({
                    AND:[
                        {id:user.id},{followings_some :{id:parent.id}}
                    ]
                });

            } catch (err){
                console.log(err)
                return false
            }
        },
        isSelf: (parent, args, {request}) => (parent.id === request.user.id)
    }
}