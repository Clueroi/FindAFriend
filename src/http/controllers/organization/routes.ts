import { app } from "@/app";
import { Register } from "./register";
import { RegisterPets } from '../pets/register'
import { AuthenticateOrg } from "./autheticateOrg";


export async function RoutesOrganization(){
    app.post('/orgs', Register)
    app.post('/orgs/sessions', AuthenticateOrg)

    app.post('/orgs/pets', RegisterPets)
}