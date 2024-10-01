import { makeGetOrgProfileUseCase } from "@/use-cases/factory/make-get-org-profile-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function OrgProfile(request: FastifyRequest, reply: FastifyReply) {
    request.jwtVerify()

    const getOrgProfile = makeGetOrgProfileUseCase()

    const { org } = await getOrgProfile.execute({
        orgId: request.user.sub
    })

    return reply.status(200).send({
        org:{
            ...org,
            password_hash:undefined
        },
    })
}