import { makeAuthenticateUserUseCase } from "@/use-cases/factory/make-authenticate-user-use-case";
import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function AuthenticateUser(request: FastifyRequest, reply: FastifyReply) {
    const authenticateSchemaBody = z.object({
        email: z.string().email(),
        password: z.string()
    })

    const { email, password } = authenticateSchemaBody.parse(request.body)

    try {
        const authenticateUser = makeAuthenticateUserUseCase()

        const { user } = await authenticateUser.execute({
            email,
            password
        })

        reply.status(200).send()


    } catch (err) {
        if (err instanceof InvalidCredentialsError) {
            return reply.status(409).send({ message: err.message })
        }

        return reply.status(500).send({ message: 'Internal server error' })
    }

}