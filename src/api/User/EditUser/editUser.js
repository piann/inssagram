import { prisma } from "../../../../generated/prisma-client";

export default{
    Mutation:{
        editUser: (_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);

            try{

                const {userName, firstName, lastName, bio} = args;
                const {user} = request;
                return prisma.updateUser({
                    where:{id:user.id}, data:{userName, firstName, lastName, bio}
                });

            } catch(err) {
                console.log(err);
                return null
            }
        }
    }
}