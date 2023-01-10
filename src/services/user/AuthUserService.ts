import { compare } from 'bcryptjs'
import prismaClient from '../../prisma'

interface AuthRequest {
  email: string
  password: string
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // verificar se o email existe.
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    })

    if (!user) {
      throw new Error('Usuario ou senha invalida!')
    }
    // preciesso verificar se a senha esta correta.

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Usuario ou senha invalida!')
    }
	//gerar um token JWT e devolver os dados do usuario como id, name e email
	

    return { ok: true }
  }
}

export { AuthUserService }
