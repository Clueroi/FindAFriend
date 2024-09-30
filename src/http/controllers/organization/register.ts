import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-existst-error";
import { makeRegisterOrgUseCase } from "@/use-cases/factory/make-register-org-use-case";
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
        city:z.string()
    })

    const {
        name,
        email,
        cep,
        endereco,
        whatsapp,
        password,
        city
    } = registerOrganizationSchema.parse(request.body)

    try {
       const registerUseCase = makeRegisterOrgUseCase()

        await registerUseCase.execute({
            name,
            email,
            cep,
            endereco,
            whatsapp,
            password,
            city
        })

        return reply.status(201).send('Organization Created')

    } catch (err) {
        if(err instanceof UserAlreadyExistsError){
            return reply.status(409).send({message:err.message})
        }

        return reply.status(500).send() //To Fix
        
    }

}