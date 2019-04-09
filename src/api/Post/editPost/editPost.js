import { prisma } from "../../../../generated/prisma-client";


export default{
    Mutation:{
        editPost: async (_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const {id, caption, location} = args;
            const {user} = request;
            try{
                const post = await prisma.$exists.post({id,user:{id:user.id}})
                if(post){
                    return prisma.updatePost({data:{caption,location}, where:{id}});
                } else{
                    throw Error("Can't edit")
                    return null;
                }
            } catch(err) {
                console.log(err);
                return null;
            }
        }
    }
}