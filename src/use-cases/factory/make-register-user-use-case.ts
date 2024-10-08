import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { RegisterUseCase } from "../register-user-use-case"

export function makeRegisterUserUseCase() {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerUseCase = new RegisterUseCase(prismaUsersRepository)

    return registerUseCase
}