import fastify from "fastify";
import { Routes } from "./http/controllers/routes";
export const app = fastify()


app.register(Routes)