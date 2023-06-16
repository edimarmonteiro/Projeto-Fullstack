import { PrismaClient } from "@prisma/client";

//Realizando conecsão com o BD
export const Prisma = new PrismaClient({
    log: ['query']
})