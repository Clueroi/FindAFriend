import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
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
    })

    const { name,
        email,
        cep,
        endereco,
        whatsapp,
        password,
    } = registerOrganizationSchema.parse(request.body)

    const password_hash = await hash(password, 6)

    await prisma.organization.create({
        data:{
            cep,
            email,
            endereco,
            name,
            password_hash,
            whatsapp,
        }
    })

}