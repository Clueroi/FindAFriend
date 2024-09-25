import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class inMemoryUserRepository{

    public users:any = []

    async Create(data:Prisma.UserCreateInput){
        await this.users.push({
            data
        })
    }

}
