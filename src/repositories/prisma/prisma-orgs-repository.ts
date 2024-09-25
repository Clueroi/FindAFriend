import { prisma } from "@/lib/prisma";
import { Organization, Prisma } from "@prisma/client";
import { OrgsRepository } from "../org-repository";

export class PrismaOrgsRepository implements OrgsRepository{

    async findByEmail(email: string){
        const orgs = await prisma.organization.findUnique({
            where:{
                email
            }
        })

        return orgs   
    }


    async findByWhatsapp(whatsapp: number){
        const orgs = await prisma.organization.findUnique({
            where:{
                whatsapp
            }
        })

        return orgs
    }



    async create(data: Prisma.OrganizationCreateInput) {
        const orgs = prisma.organization.create({
            data
        })

        return orgs
    }
}