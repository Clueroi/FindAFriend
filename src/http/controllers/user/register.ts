import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { RegisterUseCase } from "@/use-cases/register-user-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

    
    export async function Register(request:FastifyRequest, reply:FastifyReply){
        const registerUserSchema = z.object({
            name:z.string(),
            email:z.string().email(),
            password:z.string().min(6)
        })
    
        const {name, email, password} = registerUserSchema.parse(request.body)

        try{
            const prismaUsersRepository = new PrismaUsersRepository()
            const registerUseCase = new RegisterUseCase(prismaUsersRepository)

            await registerUseCase.execute({
                name, email, password
            })

            reply.status(201).send()
        } catch(err){
            return reply.status(409).send()
        }
    }