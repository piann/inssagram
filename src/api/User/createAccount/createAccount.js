import {prisma} from "../../../../generated/prisma-client"

export default{
    Mutation:{
        createAccount: async(_, args) => {
            try{
                const exists = await prisma.$exists.user({userName});
                if(exists){
                    throw Error("This userName is already used")
                    return
                }
                const {userName, email, firstName = "", lastName = "", bio = ""} = args;
                const user = await prisma.createUser({
                    userName,
                    email,
                    firstName,
                    lastName,
                    bio
                });
                return true;

            } catch(err){
                console.log(err);
                return false;
            }
        }
    }
    
}