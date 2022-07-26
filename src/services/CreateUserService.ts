interface IUser{
    name: string,
    email: string,
    age: number,
    mother: string
}

class CreateUserService {
    execute({name, email, age, mother} : IUser){
        const data = [];

        data.push({name, email, age, mother});

        return data;
    };
}

export { CreateUserService };