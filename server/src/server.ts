import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify()
const port = 333
//Realizando conecsão com o BD
const Prisma = new PrismaClient()

app.get('/users', async () => {
    //findMany : Metodo para trazer varios usuarios
    const users = await Prisma.user.findMany()

    return users
})

app.listen({port}).then( () => 
{
    console.log("Servidor funcionando👌")
})