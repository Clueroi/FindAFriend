import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository"
import { AuthenticateOrgUseCase } from "../authenticate-org-use-case"

export function makeAuthenticateOrgUseCase(){
    const prismaOrgRepository = new PrismaOrgsRepository()
    const authenticateOrg = new AuthenticateOrgUseCase(prismaOrgRepository)

    return authenticateOrg
}