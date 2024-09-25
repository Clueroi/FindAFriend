import fastify from "fastify";
import { RoutesUser } from "./http/controllers/user/routes";
import { RoutesOrganization } from "./http/controllers/organization/routes";
export const app = fastify()


app.register(RoutesUser)
app.register(RoutesOrganization)