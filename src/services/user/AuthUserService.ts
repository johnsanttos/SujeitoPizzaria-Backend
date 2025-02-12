import prismaClient from "../../prisma";
import { compare } from "bcryptjs";


interface AuthRequest{
    email: string;
    password: string
}

class AuthUserService{

    async execute({email,password}: AuthRequest){   
        //verificar se email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("Usuario ou senha incorreta")
        }

        // verificar se a senha esta correta..
        const passwordMatch = await compare(password,user.password)
        
        if(!passwordMatch){
        throw new Error("Usuario ou senha incorreta")
        }


        return{ok:true}
    }
    
}

export {AuthUserService};