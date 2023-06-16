import { FastifyInstance } from "fastify";
import { Prisma } from "../lib/peisma";

export async function criarconta (app: FastifyInstance) {
    app.get('/users', async () => {
        const users = await Prisma.user.findMany()
        //findMany : Metodo para trazer varios usuarios

        return users
    })
}