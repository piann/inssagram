import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        searchUser: async(_,args) => {
            if(args.term.length<=1){
                throw Error("Search word should be longer !");
            }
            return prisma.users(
                {where:{
                    OR:[
                        {userName_contains:args.term},
                        {firstName_contains:args.term},
                        {lastName_contains: args.term}
                    ]
                }}
            );
        }
    }

}