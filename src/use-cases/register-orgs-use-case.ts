import { prisma } from "@/lib/prisma"
import { OrgsRepository } from "@/repositories/org-repository"
import { Organization } from "@prisma/client"
import  bcrypt  from "bcryptjs"

const hash = bcrypt.hash


interface RegisterOrgsParams {
    name: string
    email: string
    cep: string
    endereco: string
    whatsapp: number
    password: string
}

interface RegisterOrgResponse {
    org: Organization
}

export class RegisterOrgsUseCase {

    constructor(private orgsRepository: OrgsRepository) { }

    async execute({ name, email, cep, endereco, whatsapp, password }: RegisterOrgsParams): Promise<RegisterOrgResponse> {
        const password_hash = await hash(password, 6)

        const sameWhatsappNumber = await this.orgsRepository.findByEmail(email)


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


        const org = await this.orgsRepository.create({
            cep,
            email,
            endereco,
            name,
            password_hash,
            whatsapp,
        })


        return {
            org
        }
    }

}
