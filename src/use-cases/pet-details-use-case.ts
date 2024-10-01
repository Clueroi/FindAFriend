import { PetRepository } from "@/repositories/pet-repository";
import { Pet } from "@prisma/client";

interface petRequest {
    id: string
}

interface petResponse {
    pet: Pet
}

export class PetDetails {
    constructor(private petRepository: PetRepository) { }

    async execute({ id }: petRequest): Promise<petResponse> {

        const pet = await this.petRepository.findById(id)

        if (!pet) {
            throw new Error("Pet not found")
        }

        return {
            pet
        }
    }
} 