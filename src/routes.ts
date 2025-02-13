import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreatedUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

//fronte-end chama a rota primeiro, depois chama o controler

const router =Router();

//--ROTAS USER
router.post('/users', new CreateUserController().handle);

router.post ('/login',new AuthUserController().handle);

router.get('/me', isAuthenticated ,new DetailUserController().handle)


export  {router}