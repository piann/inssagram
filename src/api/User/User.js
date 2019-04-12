// This file is for computed field
import { prisma } from "../../../generated/prisma-client";

export default{
    User:{
        posts: ({ id }) => prisma.user({ id }).posts(),
        followings: ({ id }) => prisma.user({ id }).followings(),
        followers: ({ id }) => prisma.user({ id }).followers(),
        likes: ({ id }) => prisma.user({ id }).likes(),
        comments: ({ id }) => prisma.user({ id }).comments(),
        rooms: ({ id }) => prisma.user({ id }).rooms(),
        postsCount: ({ id }) =>
          prisma
            .postsConnection({ where: { user: { id } } })
            .aggregate()
            .count(),
        followingsCount: async ({ id }) =>
        prisma
            .usersConnection({ where: { followers_some: { id } } })
            .aggregate()
            .count(),
        followersCount: ({ id }) =>
          prisma
            .usersConnection({ where: { followings_some: { id } } })
            .aggregate()
            .count(),
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