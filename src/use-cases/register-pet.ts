import { PetRepository } from "@/repositories/pet-repository"


interface petRequest {
    name: string
    description: string
    age: string
    body: string
    energy: string
    independence: string
    env: string
    image: string
    requirements: string
    org: string
}


export class RegisterPetUseCase {

    constructor(private petRepository: PetRepository) { }

    async execute({name, description, age, body, energy, independence, env, image, requirements, org}: petRequest) {

        const Pet = await this.petRepository.create({
            name,
            description,
            age,
            body,
            energy,
            independence,
            env,
            image,
            requirements,
            org:{
                connect:{id: org}
            }
        })

        return Pet
    }
}