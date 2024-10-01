import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetUserProfile } from "../profile-user-use-case";

export function makeGetUserProfileUseCase(){
    const prismaRepository = new PrismaUsersRepository()
    const getUserProfile = new GetUserProfile(prismaRepository)

    return getUserProfile
}