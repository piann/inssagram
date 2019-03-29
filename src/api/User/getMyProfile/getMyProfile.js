import { prisma } from "../../../../generated/prisma-client";

export default {
    Query:{
        getMyProfile: async(_, args, {request, isAuthenticated}) =>{
            isAuthenticated(request);
            const {user} = request;
            const myProfile = await prisma.user({id:user.id});
            const posts = await prisma.user({id:user.id}).posts();
            return{
                myProfile,
                posts
            }
        }
    }
}