import { Response, Request, response } from "express";

import { CreateUserService } from "../../services/user/CreateUserService";

//controler chamado depois de router, controler pega os dados do body ou params e inicializa o serviço

class CreateUserController{
    async handle (req: Request, res: Response) {
    
    // req manda os dados da requisição enviada pelo frontEnd
    const {name,email,password} =req.body
     const createUserService = new CreateUserService()

    const user = await createUserService.execute({
        name,
        email,
        password
    });

    return res.json(user)
    }

}


export {CreateUserController}