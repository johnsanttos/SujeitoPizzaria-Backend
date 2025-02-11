
import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string,
    email:string,
    password: string
}

// serviço rece os prametro e grava no banco de dados e retorna algo para o usuario

class CreateUserService{
    async execute({name,email,password}: UserRequest){

        //verificar se email foi enviado
       if(!email) {
        throw new Error("Email incorreto")
       }

       // verificar se email ja esta cadatrado na plataforma
       const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email:email
        }
       })

       if(userAlreadyExists){
        throw new Error('Usuário já existente')
       }

       //criptografar a senha para salvar no banco de dados
       const passwordHash = await hash(password,8)

       //gravar usuario no banco de dados
       const user = await prismaClient.user.create({
        data:{
            name:name,
            email:email,
            password:passwordHash
        },
        // select o que eu quero devolver para o fronte
        select:{
            id: true,
            name:true,
            email:true,
            
        }
       })

       return user
    }
}

export{CreateUserService}