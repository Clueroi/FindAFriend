import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { PetDetails } from "../pet-details-use-case";


export function makeGetPetDetails(){
    const prismaRepository = new PrismaPetRepository()
    const getPetDetails = new PetDetails(prismaRepository)

    return getPetDetails
}