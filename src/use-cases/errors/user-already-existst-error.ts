export class UserAlreadyExistsError extends Error{
    constructor(){
        super('Credentials already exists')
    }
}