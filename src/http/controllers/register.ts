import { registerUseCase } from "@/use-cases/register-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

    
    export async function Register(request:FastifyRequest, reply:FastifyReply){
        const registerUserSchema = z.object({
            name:z.string(),
            email:z.string().email(),
            password:z.string().min(6)
        })
    
        const {name, email, password} = registerUserSchema.parse(request.body)
        
            await registerUseCase({name, email, password})
            reply.status(201).send()
        

    }