import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreatedUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

//fronte-end chama a rota primeiro, depois chama o controler

const router =Router();

//--ROTAS USER
router.post('/users', new CreateUserController().handle);

router.post ('/login',new AuthUserController().handle);


export  {router}