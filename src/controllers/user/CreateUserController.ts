import { Request, response, Response } from 'express'

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {name, email,password} = req.body
	return res.json({okk: true})
  }
  
}

export { CreateUserController }
