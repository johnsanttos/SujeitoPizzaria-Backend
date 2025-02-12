import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken'


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

   // se der tudo certo gerar o token do usuario

   const token = sign(
    {
        name: user.name,
        email: user.email
    },
    process.env.JWT_SECRET,
    {
        subject: user.id,
        expiresIn: '30d'
    }
   )

   return{
    id: user.name,
    name: user.name,
    email: user.email,
    token:token
   }

    }
    
}

export {AuthUserService};