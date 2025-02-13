import { Request,Response } from "express"
import { DetailUserService } from "../../services/user/DetailUserService"

    // req manda os dados da requisição enviada pelo frontEnd
    //controler chamado depois de router, controler pega os dados do body ou params e inicializa o serviço

class DetailUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        //console.log('ID DO USER: ', user_id)

        const detailUserService = new DetailUserService()

        const user = await detailUserService.execute(user_id);

        return res.json(user)

    }
}


export {DetailUserController}