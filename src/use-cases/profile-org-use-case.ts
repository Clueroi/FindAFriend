import { OrgsRepository } from "@/repositories/org-repository";
import { Organization } from "@prisma/client";

interface getOrgProfileRequest{
    orgId:string
}

interface getOrgProfileResponse{
    org: Organization
}

export class GetOrgProfile{
    constructor(private orgRepository: OrgsRepository){}

    async execute({orgId}:getOrgProfileRequest):Promise<getOrgProfileResponse>{
        const org = await this.orgRepository.findById(orgId)

        if(!org){
            throw new Error('Organization does not exists')
        }

        return {org}
    }
}