import { prisma } from "@/lib/prisma"
import { UserRepository } from "@/repositories/user-repository"
import  bcrypt  from "bcryptjs"

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
            throw new Error('Email already exists')
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
