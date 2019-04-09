import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";


export default{
    Mutation:{
        editPost: async (_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const {id, caption, location, action} = args;
            const {user} = request;
            try{
                const post = await prisma.$exists.post({id,user:{id:user.id}})
                if(post){
                    if(action === EDIT){
                        return prisma.updatePost({data:{caption,location}, where:{id}});
                    } else if(action === DELETE){
                        return prisma.deletePost({id});
                    }
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