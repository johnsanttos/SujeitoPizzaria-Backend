
import { hash } from 'bcryptjs'
import prismaClient from '../../prisma'

interface UserRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    
	// verificar se enviou um email
    if (!email) {
      throw new Error('Email incorreto')
    }

	// Verificar se email esta cadastrado na plataforma findFirst: buscar o primeiro item que encontrar /where algum parametro que quero buscar no banco de dados
	const userAlreadyExists = await prismaClient.user.findFirst({
		where:{
			email: email
		}
	})

	if(userAlreadyExists){
		throw new Error("Usuario ja existente");
		
	}

	const passwordHash = await hash(password , 8)

	// user.create cadastrar um item no banco de dados
	const user =  await prismaClient.user.create({
		data:{
			name: name,
			email:email,
			password:passwordHash

		},
		select:{
			id: true,
			name: true,
			email:true
		}
	})

	// select:  o que eu quero devolver para o front

    return user
  }
}

export { CreateUserService }
