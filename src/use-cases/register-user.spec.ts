import { it, describe, expect } from 'vitest'
import { RegisterUseCase } from './register-user-use-case'
import { compare } from 'bcryptjs'
import { inMemoryUserRepository } from '@/repositories/memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-existst-error'

describe('Register user use-case', () => {

    it('should be able to hash user password', async () => {
        
        const usersRepository = new inMemoryUserRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const { user } = await registerUseCase.execute({
            email: 'jhosoe@gmail.com',
            name: "jhon Doe",
            password: "123456"
        })

        const isPasswordCorrectlyHashed = await compare('123456', user.password_hash)

        expect(isPasswordCorrectlyHashed).toBe(true)

        console.log(user.password_hash)
    })

    it('should not be able to login with same email twice', async () => {
        
        const inMemoryRepository = new inMemoryUserRepository()
        const sut = new RegisterUseCase(inMemoryRepository)

        const email = 'jhosoe@gmail.com'

        await sut.execute({
            email,
            name: "jhon Doe",
            password: "123456"
        })

        await expect(()=>
            sut.execute({
                email,
                name: "jhon Doe",
                password: "123456"
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })
})