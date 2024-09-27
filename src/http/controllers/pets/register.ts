import { prisma } from "@/lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function RegisterPets(request: FastifyRequest, reply:FastifyReply) {
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
        org:z.string()
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


    const pet = await prisma.pet.create({
        data:{
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
        }
    })

    return reply.status(201)
}