import { app } from "@/app";
import { Register } from "./register";


export async function RoutesOrganization(){
    app.post('/orgs', Register)
}