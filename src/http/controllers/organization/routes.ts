import { app } from "@/app";
import { Register } from "./register";
import { RegisterPets } from '../pets/register'


export async function RoutesOrganization(){
    app.post('/orgs', Register)

    app.post('/orgs/pets', RegisterPets)
}