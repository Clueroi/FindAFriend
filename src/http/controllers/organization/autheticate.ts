import { makeAuthenticateOrgUseCase } from "@/use-cases/factory/make-authenticate-orgs-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function AuthenticateOrg(request: FastifyRequest, reply: FastifyReply) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string()
    })

    const { email, password } = authenticateBodySchema.parse(request.body)


    try {
        const authenticateOrg = makeAuthenticateOrgUseCase()

        const { org } = await authenticateOrg.execute({
            email,
            password
        })

        const token = await reply.jwtSign({}, {
            sign: {
                sub: org.id
            }
        })

        return reply.status(200).send({
            token
        })

    } catch (err) {
        return reply.status(400).send({ message: err })
    }

}