import { prisma } from "../../../generated/prisma-client";

// This file is for computed field

export default {
    Post:{
        isLiked: async (parent, args, {request}) => {
            const {user} = request;
            const {id} = parent;
            return prisma.$exists.like({
                AND:[
                    {user:{id:user.id}}, {post:{id}}
                ]
            })
        }
    }

}