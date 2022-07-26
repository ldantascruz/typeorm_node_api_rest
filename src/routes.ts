import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";


const router = Router();
const createUserController = new CreateUserController();

router.get("/", (request: Request, response: Response) => {
    response.json({message: "Bem vindo a nossa API"});
});

router.post("/users", createUserController.handle);

export { router };