import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-existst-error"
import { makeRegisterUserUseCase } from "@/use-cases/factory/make-register-user-use-case"
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
            const registerUseCase = makeRegisterUserUseCase()

            await registerUseCase.execute({
                name, email, password
            })

            return reply.status(201).send()
        } catch(err){

            if(err instanceof UserAlreadyExistsError){
                return reply.status(409).send({message:err.message})
            }

            return reply.status(500).send() //to fix
        }
    }