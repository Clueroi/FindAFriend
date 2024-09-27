import { Prisma } from "@prisma/client";
import { PetRepository } from "../pet-repository";
import { prisma } from "@/lib/prisma";


export class PrismaPetRepository implements PetRepository{
    async create(data: Prisma.PetCreateInput) {
        const pet = prisma.pet.create({
            data
        })

        return pet
    }
}