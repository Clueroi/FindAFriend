import { OrgsRepository } from "@/repositories/org-repository"
import { Organization } from "@prisma/client"
import { InvalidCredentialsError } from "./errors/invalid-credentials-error"
import { compare } from "bcryptjs"



interface AuthenticateOrgRequest {
    email: string
    password: string
}

interface AuthenticateOrgResponse {
    org: Organization
}

export class AuthenticateOrgUseCase {
    constructor(private orgRepository: OrgsRepository) { }

    async execute({ email, password }: AuthenticateOrgRequest):Promise<AuthenticateOrgResponse> {

        const org = await this.orgRepository.findByEmail(email)

        if (!org) {
            throw new InvalidCredentialsError()
        }

        const doesPasswordMatche = compare(password, org.password_hash)

        if (!doesPasswordMatche) {
            throw new InvalidCredentialsError()
        }

        return {
            org
        }
    }
}