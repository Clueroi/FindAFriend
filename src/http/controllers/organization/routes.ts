import { app } from "@/app";
import { Register } from "./register";
import { RegisterPets } from '../pets/register'
import { AuthenticateOrg } from "./autheticateOrg";
import { PetDetails } from "../pets/pet-details";


export async function RoutesOrganization(){
    app.post('/orgs', Register)
    app.post('/orgs/sessions', AuthenticateOrg)

    // Authenticated

    app.post('/orgs/pets', RegisterPets)
    app.get('/orgs/pet-details', PetDetails)
}