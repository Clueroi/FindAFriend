import { prisma } from "@/lib/prisma";
import { PetRepository } from "@/repositories/pet-repository";
import { Pet } from "@prisma/client";

interface petRequest{
    petId: string
}

interface petResponse{
    pet:Pet
}

export class PetDetails{
    constructor(private petRepository:PetRepository){}

    async execute({petId}:petRequest){
        
        const pet = await prisma.pet.findUnique({
            where:{
                id:petId
            }
        })

        return pet
    }
}