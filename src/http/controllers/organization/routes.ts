import { app } from "@/app";
import { Register } from "./register";
import { RegisterPets } from '../pets/register'
import { AuthenticateOrg } from "./autheticate";
import { PetDetails } from "../pets/pet-details";
import { OrgProfile } from "./profile";


export async function RoutesOrganization(){
    app.post('/orgs', Register)
    app.post('/orgs/sessions', AuthenticateOrg), 

    // Authenticated

    app.get('/orgs/me', OrgProfile)

    app.post('/orgs/pets', RegisterPets)
    app.get('/orgs/pet-details/:id', PetDetails)
} 