import { Pet, Prisma } from "@prisma/client";
import { PetRepository } from "../pet-repository";
import { prisma } from "@/lib/prisma";


export class PrismaPetRepository implements PetRepository{
    
    async searchMany(query: string, page: number) {

        const itensPerPage = 20

        return prisma.pet.findMany({
            where:{
                name:{
                    contains:query
                },
            },
            skip:(page - 1) * itensPerPage,
            take:itensPerPage
        })
    }

    async create(data: Prisma.PetCreateInput) {
        const pet = prisma.pet.create({
            data
        })

        return pet
    }
}