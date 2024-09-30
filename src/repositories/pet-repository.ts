import { Pet, Prisma } from "@prisma/client";

export interface PetRepository{
    findById(id:string):Promise<Pet | null>
    create(data:Prisma.PetCreateInput):Promise<Pet>
    searchMany(query:string, page:number):Promise<Pet[]>
}