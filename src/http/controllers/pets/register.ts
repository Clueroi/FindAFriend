import { PrismaPetRepository } from "@/repositories/prisma/prisma-pet-repository";
import { RegisterPetUseCase } from "@/use-cases/register-pet-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function RegisterPets(request: FastifyRequest, reply: FastifyReply) {
    const petsBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        age: z.string(),
        body: z.string(),
        energy: z.string(),
        independence: z.string(),
        env: z.string(),
        image: z.string().url(),
        requirements: z.string(),
        org: z.string()
    })

    const { name,
        description,
        age,
        body,
        energy,
        independence,
        env,
        image,
        org,
        requirements, } = petsBodySchema.parse(request.body)


    const prismaPetRepository = new PrismaPetRepository()
    const registerPetUseCase = new RegisterPetUseCase(prismaPetRepository)

    registerPetUseCase.execute({
        name,
        description,
        age,
        body,
        energy,
        independence,
        env,
        image,
        org,
        requirements
    })

    return reply.status(201).send()
}