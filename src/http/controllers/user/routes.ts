import { FastifyInstance } from "fastify";
import { Register } from "./register";
import { AuthenticateUser } from "./autheticate";

export async function RoutesUser(app:FastifyInstance){
    app.post('/users', Register)
    app.post('/sessions', AuthenticateUser)
}