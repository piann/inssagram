import {prisma} from "../../../../generated/prisma-client"

export default{
    Mutation:{
        createAccount: async(_, args) => {
            try{
                
                const {userName, email, firstName = "", lastName = "", bio = ""} = args;
                const existUserName = await prisma.$exists.user({userName});
                const existEmail = await prisma.$exists.user({email});
                if(existUserName || existEmail){
                    throw Error("This userName or E-mail is already used")
                    
                }
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