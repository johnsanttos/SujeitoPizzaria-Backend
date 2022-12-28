
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

	const user =  await prismaClient.user.create({
		data:{
			name: name,
			email:email,
			password:password

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
