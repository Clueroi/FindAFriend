import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class PrismaOrgsRepository {
    async create(data: Prisma.OrganizationCreateInput) {
        const orgs = prisma.organization.create({
            data
        })

        return orgs
    }
}