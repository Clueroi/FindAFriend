import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository";
import { RegisterOrgsUseCase } from "@/use-cases/register-orgs-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function Register(request: FastifyRequest, reply: FastifyReply) {

    const registerOrganizationSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        cep: z.string(),
        endereco: z.string(),
        whatsapp: z.number(),
        password: z.string(),
    })

    const { 
        name,
        email,
        cep,
        endereco,
        whatsapp,
        password,
    } = registerOrganizationSchema.parse(request.body)

    try{
        const prismaConnection = new PrismaOrgsRepository()
        const registerUseCase = new RegisterOrgsUseCase(prismaConnection)

        registerUseCase.execute({
            name,
            email,
            cep,
            endereco,
            whatsapp,
            password,
        })
        
        return reply.status(201).send('Organization Created')

    }catch(err){
        reply.status(409).send()
    }

}