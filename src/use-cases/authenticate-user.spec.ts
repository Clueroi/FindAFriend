import { inMemoryUserRepository } from "@/repositories/memory/in-memory-users-repository";
import { it, describe, expect, beforeAll } from "vitest";
import { AuthenticateUserUseCase } from "./authenticate-user-use-case";
import { hash } from "bcryptjs";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";


let inMemoryRepository = new inMemoryUserRepository()
let sut = new AuthenticateUserUseCase(inMemoryRepository)

describe('Authenticate user use case', () => {

    beforeAll(() => {
        sut = new AuthenticateUserUseCase(inMemoryRepository)
        inMemoryRepository = new inMemoryUserRepository()
    })

    it('should be able to authenticate user', async () => {

        await inMemoryRepository.create({
            name: 'erc',
            email: 'inMemo@gmail.com',
            password_hash: await hash('123456', 6)
        })

        const { user } = await sut.execute({
            email: 'inMemo@gmail.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('should not be able to authenticate with wrong email', async () => {
        const inMemoryRepository = new inMemoryUserRepository()
        const sut = new AuthenticateUserUseCase(inMemoryRepository)

        await inMemoryRepository.create({
            name: 'erc',
            email: 'inMemo@gmail.com',
            password_hash: await hash('123456', 6)
        })

        expect(async () =>
            await sut.execute({
                email: 'inmo@gmail.com',
                password: '123456'
            })
        ).rejects.toBeInstanceOf(InvalidCredentialsError)
    })

    it('should not be able to authenticate with wrong password', async () => {
        const inMemoryRepository = new inMemoryUserRepository()
        const sut = new AuthenticateUserUseCase(inMemoryRepository)

        await inMemoryRepository.create({
            name: 'erc',
            email: 'inMemo@gmail.com',
            password_hash: await hash('123456', 6)
        })

        expect(async () =>
            await sut.execute({
                password: '123123',
                email: 'inMemo@gmail.com',
            })
        ).rejects.toBeInstanceOf(InvalidCredentialsError)
    })

})