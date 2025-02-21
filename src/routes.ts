import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreatedUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

//fronte-end chama a rota primeiro, depois chama o controler

const router =Router();

//--ROTAS USER--
router.post('/users', new CreateUserController().handle);

router.post ('/login',new AuthUserController().handle);

router.get('/me', isAuthenticated ,new DetailUserController().handle);

//--ROTAS CATEGORY--

router.post('/category', isAuthenticated,new CreateCategoryController().handle)

router.get('/category', isAuthenticated,new ListCategoryController().handle)

//--ROTAS PRODUCT--

router.post('/product', isAuthenticated,new CreateProductController().handle)

export  {router}