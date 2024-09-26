import { Prisma, User } from "@prisma/client";
import { UserRepository } from "../user-repository";

export class inMemoryUserRepository implements UserRepository {
    public users: User[] = []


    async create(data: Prisma.UserCreateInput) {

        const user = {
            id: 'user-id',
            email: 'test@gmail.com',
            name: 'user-name',
            password_hash: data.password_hash,
            created_at: new Date()
        }

        this.users.push(user)

        return user

    }

    async findByEmail(email: string) {

        const user = this.users.find(item => item.email === email)

        if (!user) {
            return null
        }

        return user
    }




}
