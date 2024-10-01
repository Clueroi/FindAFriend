import { makeGetUserProfileUseCase } from "@/use-cases/factory/make-get-user-profile-use-case";
import { FastifyReply, FastifyRequest } from "fastify";

export async function UserProfile(request: FastifyRequest, reply: FastifyReply) {
    request.jwtVerify()

    const getUserProfile = makeGetUserProfileUseCase()

    const { user } = await getUserProfile.execute({
        userId:request.user.sub
    })

    return reply.status(200).send({
        user:{
            ...user,
            password_hash:undefined
        },
    })
}