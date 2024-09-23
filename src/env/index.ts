import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    NODE_ENV:z.enum(['dev', 'test', 'production']).default('dev'),
    PORT:z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    console.log('❌ Invalid Environment Variables')

    throw new Error('Invalid Environment Variables')
}

export const amb_env = _env.data