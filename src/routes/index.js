// Importación del router de Express
import { Router } from "express";
// Importación de las rutas de productos
import productsRoutes from "./products.routes.js";
// Importación de las rutas de carritos
import cartsRoutes from "./carts.routes.js";
// Importación de las rutas de las sessions
import sessionRoutes from "./session.routes.js";
//Importación para el middleware de logeo de usuario
import { isLogin } from "../middlewares/isLogin.middleware.js";

// Creación del router
const router = Router();

// Utiliza las rutas de productos bajo el prefijo "/products"
router.use("/products", isLogin, productsRoutes);
// Utiliza las rutas de carritos bajo el prefijo "/carts"
router.use("/carts", isLogin, cartsRoutes);
// Utiliza las rutas de carritos bajo el prefijo "/sessions"
router.use("/session", sessionRoutes);

// Exporta el router
export default router;