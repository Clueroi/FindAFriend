import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeGetPetDetails } from '@/use-cases/factory/make-get-pet-details'

const routeSchema = z.object({
    id: z.string(),
})

export async function PetDetails(request: FastifyRequest, reply: FastifyReply,) {
    const { id } = routeSchema.parse(request.params)

    const getPetDetails = makeGetPetDetails()

    try {
        const { pet } = await getPetDetails.execute({ id })

        return reply.status(200).send(pet)
    } catch (error) {
        if (error instanceof Error) {
            return reply.status(404).send({ message: error.message })
        }

        console.error(error)

        return reply.status(500).send({ message: 'Internal server error' })
    }
}