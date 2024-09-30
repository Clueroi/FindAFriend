import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-repository";
import { AuthenticateOrgUseCase } from "@/use-cases/authenticate-org-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export function AuthenticateOrg(request:FastifyRequest, reply:FastifyReply){
    const authenticateBodySchema = z.object({
        email:z.string().email(),
        password:z.string()
    })

    const {email, password} = authenticateBodySchema.parse(request.body)

    const prismaOrgRepository = new PrismaOrgsRepository()
    const authenticateOrg = new AuthenticateOrgUseCase(prismaOrgRepository)

    try{
        authenticateOrg.execute({
            email,
            password
        }) 

        return reply.status(200).send()
    } catch(err){
        return reply.status(400).send({message:err})
    }

}