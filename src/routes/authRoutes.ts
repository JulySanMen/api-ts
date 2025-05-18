import {Router} from 'express';
import { AuthController } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';


const router = Router();
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/users",authMiddleware, AuthController.findAll);

export default router;
//export defaulto lo extraemos de un objeto para llamarlo como noostros queramos 