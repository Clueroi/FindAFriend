import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository"
import { RegisterOrgsUseCase } from "../register-orgs-use-case"

export function makeRegisterOrgUseCase(){
    const prismaConnection = new PrismaOrgsRepository()
    const registerUseCase = new RegisterOrgsUseCase(prismaConnection)

    return registerUseCase
}