import { app } from "./app";
import { amb_env } from "./env";


app.listen({
    host:'0.0.0.0',
    port: amb_env.PORT
}).then(()=>{
    console.log('Server running! 🥶')
})