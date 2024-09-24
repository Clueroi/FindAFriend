import { FastifyInstance } from "fastify";
import { Register } from "./register";

export async function Routes(app:FastifyInstance){
    app.post('/users', Register)
}