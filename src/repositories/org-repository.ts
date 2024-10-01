import { Organization, Prisma } from "@prisma/client";

export interface OrgsRepository{
    create(data:Prisma.OrganizationCreateInput):Promise<Organization>
    findById(userId:string):Promise<Organization | null>
    findByEmail(email: string):Promise<Organization | null>
    findByWhatsapp(whatsapp: number): Promise<Organization | null>
}