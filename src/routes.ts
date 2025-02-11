import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreatedUserController";

//fronte-end chama a rota primeiro, depois chama o controler

const router =Router();

//--ROTAS USER
router.post('/users', new CreateUserController().handle)


export  {router}