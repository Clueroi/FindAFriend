import { OrgsRepository } from "@/repositories/org-repository"
import { Organization } from "@prisma/client"
import  bcrypt  from "bcryptjs"
import { UserAlreadyExistsError } from "./errors/user-already-existst-error"

const hash = bcrypt.hash


interface RegisterOrgsParams {
    name: string
    email: string
    cep: string
    endereco: string
    whatsapp: number
    password: string
    city: string
}

interface RegisterOrgResponse {
    org: Organization
}

export class RegisterOrgsUseCase {

    constructor(private orgsRepository: OrgsRepository) { }

    async execute({ name, email, cep, endereco, whatsapp, password, city }: RegisterOrgsParams): Promise<RegisterOrgResponse> {
        const password_hash = await hash(password, 6)

        const sameEmail = await this.orgsRepository.findByEmail(email)

        const sameWhatsapp = await this.orgsRepository.findByWhatsapp(whatsapp)

        if(sameWhatsapp){
            throw new UserAlreadyExistsError()
        }

        if(sameEmail){
            throw new UserAlreadyExistsError()
        }

        const org = await this.orgsRepository.create({
            cep,
            email,
            endereco,
            name,
            password_hash,
            whatsapp,
            city
        })


        return {
            org
        }
    }
}
