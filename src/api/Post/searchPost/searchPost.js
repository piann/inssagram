import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        searchPost:async (_,args)=> {
            if(args.term.length<=1){
                throw Error("Search word should be longer !")
            }
            return prisma.posts({where:{
                OR:[
                    {location_contains:args.term},
                    {caption_contains:args.term}
                ]
            }})
        }
    }
}