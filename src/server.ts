import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { memoriesRoutes } from './routes/memories'
import { prisma } from './routes/lib/prima'
import { cors } from '@fastify/cors'
//import { usersRoutes } from './routes/users'

const app = fastify()

// registro de rotas separadas.
app.register(memoriesRoutes)

app.register(cors) {
    origin: true // Todas as urls de front-end poderão acessar o back-end
}

app.listen({
    port: 3333,
}).then(() => {
    console.log("Server listening on http://localhost:3333")
})