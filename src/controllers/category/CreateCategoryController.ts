import { Request, response, Response } from 'express';
import { CreateCategoryService } from '../../services/category/CreateCategoryService';

class CreateCategoryController{
async handle(req: Request, res:Response){
//pegar do corpo da requisição
const {name} = req.body

const createCategoryService = new CreateCategoryService()

const category = await createCategoryService.execute({
name
})

return res.json(category)
}
}

export default CreateCategoryController