import { Request,Response } from "express"
import { DetailUserService } from "../../services/user/DetailUserService"

    // req manda os dados da requisição enviada pelo frontEnd
    //controler chamado depois de router, controler pega os dados do body ou params e inicializa o serviço

class DetailUserController{
    async handle(req: Request, res: Response){

        const detailUserService = new DetailUserService()

        const user = await detailUserService.execute();

        return res.json(user)

    }
}


export {DetailUserController}