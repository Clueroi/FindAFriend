import { FastifyInstance } from "fastify";
import { Register } from "./register";

export async function RoutesUser(app:FastifyInstance){
    app.post('/users', Register)
}