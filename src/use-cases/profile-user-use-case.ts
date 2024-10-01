import { UserRepository } from "@/repositories/user-repository";
import { User } from "@prisma/client";

interface getUserProfileRequest{
    userId:string
}

interface getUserProfileResponse{
    user: User
}

export class GetUserProfile{
    constructor(private userRepository: UserRepository){}

    async execute({userId}:getUserProfileRequest):Promise<getUserProfileResponse>{
        const user = await this.userRepository.findById(userId)

        if(!user){
            throw new Error('Organization does not exists')
        }

        return {user}
    }
}