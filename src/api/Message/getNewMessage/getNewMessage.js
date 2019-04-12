import { prisma } from "../../../../generated/prisma-client";

export default{
    Subscription:{
        getNewMessage:{ 
                subscribe: (_, args, {request,isAuthenticated}) => { 
                    //isAuthenticated(request);
                    console.log(request);
                    const {roomId} = args;
                    //const {user} = request;
                    try{

                        return prisma.$subscribe.message({
                            AND:[
                                {mutation_in:"CREATED"},
                                {node:{
                                    AND:[
                                        {room:{id:roomId}}
                                    ]
                                }
                            }
                        ]
                    }).node();
                   }catch(err){
                       console.log(err);
                       return null
                   }
                
                },
                resolve: payload => payload

        }
    }
}
    
