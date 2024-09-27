import { UserRepository } from "@/repositories/user-repository"
import  bcrypt  from "bcryptjs"
import { UserAlreadyExistsError } from "./errors/user-already-existst-error"

const hash = bcrypt.hash

interface RegisterUseCaseParams {
    name: string
    email: string
    password: string
}

export class RegisterUseCase {

    constructor(private usersRepository: UserRepository) { }

    async execute({ name, email, password }: RegisterUseCaseParams) {
        const password_hash = await hash(password, 6)

        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if (userWithSameEmail) {
            throw new UserAlreadyExistsError()
        }

        const user = await this.usersRepository.create({
            email,
            name,
            password_hash
        })

        return {
            user
        }
    }

}
