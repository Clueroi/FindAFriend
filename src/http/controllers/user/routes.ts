import { FastifyInstance } from "fastify";
import { Register } from "./register";
import { AuthenticateUser } from "./autheticate";
import { UserProfile } from "./profile";

export async function RoutesUser(app:FastifyInstance){
    app.post('/users', Register)
    app.post('/sessions', AuthenticateUser)
    app.post('/users/me', UserProfile)
}