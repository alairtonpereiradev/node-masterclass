import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { memoriesRoutes } from './routes/memories'
import { prisma } from './routes/lib/prima'

const app = fastify()

// registro de rotas separadas.
app.register(memoriesRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log("Server listening on http://localhost:3333")
})