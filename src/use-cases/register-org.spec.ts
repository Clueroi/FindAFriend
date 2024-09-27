import { inMemoryOrgsRepository } from "@/repositories/memory/in-memory-orgs-repository";
import { compare } from "bcryptjs";
import { describe, expect, it } from "vitest";
import { RegisterOrgsUseCase } from "./register-orgs-use-case";
import { UserAlreadyExistsError } from "./errors/user-already-existst-error";

describe('Register Organization Use Case', () => {

    it('should be able to hash org password', async () => {

        const inMemoryRepository = new inMemoryOrgsRepository()
        const sut = new RegisterOrgsUseCase(inMemoryRepository)

        const { org } = await sut.execute({
            name: 'org-name',
            email: 'org@gmail.com',
            cep: 'org-cep',
            city: 'Sp',
            endereco: 'org-end',
            whatsapp: 11909090,
            password: '123456'
        })

        const isPasswordCorrectlyHashed = await compare('123456', org.password_hash)

        expect(isPasswordCorrectlyHashed).toBe(true)
    })


    it('sould not be able to register with same email twice', async () => {
        const inMemoryRepository = new inMemoryOrgsRepository()
        const sut = new RegisterOrgsUseCase(inMemoryRepository)

        const email = 'org@gmail.com'

        await sut.execute({
            email,
            name: 'org',
            cep: '111',
            city: 'sp',
            endereco: 'sp',
            password: '123456',
            whatsapp: 11
        })

        expect(() =>
            sut.execute({
                email,
                name: 'org',
                cep: '111',
                city: 'sp',
                endereco: 'sp',
                password: '123456',
                whatsapp: 11
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })
})

