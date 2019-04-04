import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragment";

export default {
    Query:{
        getPostInfo: async(_, args,)=>{

            try{
                const {id} = args;
                return await prisma.post({id});
                
            }catch(err){
                console.log(err);
                return null
            }
        } 
    }
}
