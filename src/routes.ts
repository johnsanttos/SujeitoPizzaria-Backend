import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreatedUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import  uploadConfig from './config/multer'
import { RemoveOrderController } from "./controllers/CreateOrderController.ts/RemoveOrderController";


//fronte-end chama a rota primeiro, depois chama o controler


const router =Router();

const upload = multer(uploadConfig.upload("./tmp"));

//--ROTAS USER--
router.post('/users', new CreateUserController().handle);

router.post ('/login',new AuthUserController().handle);

router.get('/me', isAuthenticated ,new DetailUserController().handle);

//--ROTAS CATEGORY--

router.post('/category', isAuthenticated,new CreateCategoryController().handle)

router.get('/category', isAuthenticated,new ListCategoryController().handle)

//--ROTAS PRODUCT--

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)


router.get('/category/product', isAuthenticated, new ListCategoryController().handle)


//--ROTAS ORDER--

router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

export  {router}

