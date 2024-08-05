import { Router } from "express";

const router = Router();

// Definir rutas para usuarios
router.get("/");
router.post("/", createUser);

export default router;
