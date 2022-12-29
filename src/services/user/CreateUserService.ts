
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

	// Verificar se email esta cadastradona plataforma
	const userAlreadyExists = await prismaClient.user.findFirst({
		where:{
			email: email
		}
	})

	if(userAlreadyExists){
		throw new Error("Usuario ja existente");
		
	}

	const passwordHash = await hash(password , 8)

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

    return user
  }
}

export { CreateUserService }
