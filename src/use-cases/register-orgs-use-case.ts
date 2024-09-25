import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"


interface RegisterOrgsParams {
    name: string
    email: string
    cep: string
    endereco: string
    whatsapp: number
    password: string
}

export class RegisterOrgsUseCase {

    constructor(private orgsRepository: any) { }

    async execute({ name, email, cep, endereco, whatsapp, password }: RegisterOrgsParams) {
        const password_hash = await hash(password, 6)

        const sameWhatsappNumber = await prisma.organization.findUnique({
            where: {
                whatsapp
            }
        })

        const sameEmail = await prisma.organization.findUnique({
            where: {
                email
            }
        })

        if (sameWhatsappNumber) {
            throw new Error('Number already signed')
        }

        if (sameEmail) {
            throw new Error('E-mail not able')
        }

        await this.orgsRepository.create({
            cep,
            email,
            endereco,
            name,
            password_hash,
            whatsapp,
        })
    }

}
