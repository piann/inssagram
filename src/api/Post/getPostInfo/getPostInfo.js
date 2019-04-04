import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragment";

export default {
    Query:{
        getPostInfo: async(_, args,)=>{

            try{

                const {id} = args;
                const post = await prisma.post({id});
                const comments = await prisma.post({id}).comments().$fragment(COMMENT_FRAGMENT);
                const likeCount = await prisma.likesConnection(
                    {where:{post:{id}}}
                    ).aggregate().count();
                const files = await prisma.post({id}).files();
                const user = await prisma.post({id}).user();
                return {
                    post, comments, likeCount,files,user
                }

            }catch(err){
                console.log(err);
                return null
            }
        } 
    }
}
