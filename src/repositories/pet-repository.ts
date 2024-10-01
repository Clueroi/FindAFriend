import { Pet, Prisma } from "@prisma/client";

export interface PetRepository{
    findById(id:string):Promise<Pet | null>
    create(data:Prisma.PetCreateInput):Promise<Pet>
    searchMany(query:string, page:number, city:string, age?:string, body?:string, energy?:string):Promise<Pet[]>
}