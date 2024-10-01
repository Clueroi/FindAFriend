import { PetRepository } from "@/repositories/pet-repository"
import { Pet } from "@prisma/client"


interface SearchAnimalRequest{
    query:string
    page:number
    city:string
}

interface SearchAnimalResponse{
    pets: Pet[]
}


export class SearchAnimals{

    constructor(private petRepository: PetRepository){}

    async execute({query, page, city}: SearchAnimalRequest):Promise<SearchAnimalResponse>{
        const pets = await this.petRepository.searchMany(query, page, city)
        return {
            pets
        }
    }
}