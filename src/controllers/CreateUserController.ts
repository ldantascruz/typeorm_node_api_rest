import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    handle (request: Request, response: Response) { 
        
        const createUserService = new CreateUserService();

        const name = request.body.name;
        const email = request.body.email;
        const age = request.body.age;
        const mother = request.body.mother;

        if(name.length === 0 || email.length === 0 || age === 0 || mother.length === 0){
            return response.status(400).json({message: "Informe todos os dados corretamente!"});
        };

        const user = createUserService.execute({name, email, age, mother});

        return response.status(201).json({user});
    };
};

export { CreateUserController };



/*
return response.status(200).json([
    {
        name: "Lucas",
        email: "ldantascruz@gmail.com",
        age: 23,
        mother: "Dalva"
    },
    {
        name: "Támanta",
        email: "tamantamartins97@gmail.com",
        age: 25,
        mother: "Cirlene"
    },
    {
        name: "Teste",
        email: "teste@teste.com",
        age: 50,
        mother: "MãeTeste"
    }

]);
*/