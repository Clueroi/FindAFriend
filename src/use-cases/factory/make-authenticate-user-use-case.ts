import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { AuthenticateUserUseCase } from "../authenticate-user-use-case"

export function makeAuthenticateUserUseCase() {
    const prismaUsersRepository = new PrismaUsersRepository()
    const authenticateUser = new AuthenticateUserUseCase(prismaUsersRepository)

    return authenticateUser
}