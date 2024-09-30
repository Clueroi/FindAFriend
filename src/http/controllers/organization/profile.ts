import { FastifyReply, FastifyRequest } from "fastify";

export async function OrgProfile(request: FastifyRequest, reply:FastifyReply){

    request.jwtVerify()

    console.log(request.user.sub)

    return reply.status(200).send()
}