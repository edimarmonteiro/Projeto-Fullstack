//Para isportar as variaves abiente
import 'dotenv/config'

import fastify from "fastify";
import { authRoutes } from './routes/auth';
import { criarconta } from './routes/criarconta';
const app = fastify()
const port = 333

app.register(criarconta)
app.register(authRoutes)

app.listen({port}).then( () => 
{
    console.log("Servidor funcionando👌")
})