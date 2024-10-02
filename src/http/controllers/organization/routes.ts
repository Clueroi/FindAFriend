import { app } from "@/app";
import { Register } from "./register";
import { RegisterPets } from '../pets/register'
import { AuthenticateOrg } from "./autheticate";
import { PetDetails } from "../pets/pet-details";
import { OrgProfile } from "./profile";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { Refresh } from "./refresh";
import { VerifyUserRole } from "@/http/middlewares/verify-user-role";


export async function RoutesOrganization(){
    app.post('/orgs', Register)
    app.post('/orgs/sessions', AuthenticateOrg) 
    
    app.patch('/token/refresh', Refresh)

    // Authenticated

    app.get('/orgs/me', {onRequest:[verifyJWT]}, OrgProfile)

    app.post('/orgs/pets', {onRequest:[VerifyUserRole("ADMIN")]}, RegisterPets)
    app.get('/orgs/pet-details/:id', PetDetails)
} 