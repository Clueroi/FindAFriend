import fastifyJwt from "@fastify/jwt";
import fastify from "fastify";
import fastifyCookie from "@fastify/cookie";
import { ZodError } from "zod";

import { RoutesUser } from "./http/controllers/user/routes";
import { RoutesOrganization } from "./http/controllers/organization/routes";

import { env } from "./env";


export const app = fastify()

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie:{
        cookieName:'refreshToken',
        signed:false,
    },
    sign:{
        expiresIn: '10m'
    }
})

app.register(fastifyCookie)

app.register(RoutesUser)
app.register(RoutesOrganization)

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({ message: 'Validation Error', issues: error.format() })
    }

    if (env.NODE_ENV !== 'production') {
        console.error(error)
    } else {
        // Use some tool to oservate what's going on with your code
    }

    return reply.status(500).send({ message: 'Internal Server Error ' })
})