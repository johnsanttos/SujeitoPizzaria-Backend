import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreatedUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";

//fronte-end chama a rota primeiro, depois chama o controler

const router =Router();

//--ROTAS USER--
router.post('/users', new CreateUserController().handle);

router.post ('/login',new AuthUserController().handle);

router.get('/me', isAuthenticated ,new DetailUserController().handle);

//--ROTAS CATEGORY--

router.post('/category', isAuthenticated,new CreateCategoryController().handle)

export  {router}