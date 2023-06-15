import fastify from "fastify";

const app = fastify()
const port = 333

app.listen({port}).then(() => {
    console.log("Servidor funcionando👌")
})