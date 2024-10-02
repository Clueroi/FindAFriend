import { FastifyInstance } from "fastify";
import { Register } from "./register";
import { AuthenticateUser } from "./autheticate";
import { UserProfile } from "./profile";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { Refresh } from "./refresh";

export async function RoutesUser(app:FastifyInstance){
    app.post('/users', Register)
    app.post('/sessions', AuthenticateUser)

    app.patch('/token/refresh', Refresh)

    app.post('/users/me', {onRequest:[verifyJWT]}, UserProfile)
}