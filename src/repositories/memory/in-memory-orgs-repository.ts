import { Prisma, Organization } from "@prisma/client";
import { OrgsRepository } from "../org-repository";
import { Decimal } from "@prisma/client/runtime/library";

export class inMemoryOrgsRepository implements OrgsRepository {

    public orgs: Organization[] = []


    async create(data: Prisma.OrganizationCreateInput) {

        const org = {
            id: 'org-id',
            name: data.name,
            email: data.email,
            cep: data.cep,
            city:data.city,
            endereco: data.endereco,
            whatsapp: new Decimal(data.whatsapp.toString()),
            password_hash: data.password_hash
        }

        this.orgs.push(org)

        return org
    }
    async findByEmail(email: string) {
        const org = this.orgs.find(item => item.email === email)

        if(!org){
            return null
        }

        return org 
    }
    async findByWhatsapp(whatsapp: number) {
        const org = this.orgs.find(item => item.whatsapp === new Decimal(whatsapp))

        if(!org){
            return null
        }

        return org
    }

}