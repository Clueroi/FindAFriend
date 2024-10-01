import { PetRepository } from "@/repositories/pet-repository"
import { Pet } from "@prisma/client"


interface SearchAnimalRequest {
    query: string
    page: number
    city: string
    energy?: string
    age?: string
    body?: string
}

interface SearchAnimalResponse {
    pets: Pet[]
}


export class SearchAnimals {

    constructor(private petRepository: PetRepository) { }

    async execute
        ({ query,
            page,
            city,
            age,
            body,
            energy
        }: SearchAnimalRequest): Promise<SearchAnimalResponse> {
        const pets = await this.petRepository.searchMany(query, page, city, age, body, energy)
        return {
            pets
        }
    }
}