import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository";
import { GetOrgProfile } from "../profile-org-use-case";

export function makeGetOrgProfileUseCase(){
    const prismaRepository = new PrismaOrgsRepository()
    const getOrgProfile = new GetOrgProfile(prismaRepository)

    return getOrgProfile
}