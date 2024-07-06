import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prima";


// Codificação de Rotas de memórias.
export async function memoriesRoutes(app: FastifyInstance) {
    app.get('/memories', async () => {
        const memories = await prisma.memory.findMany({
            orderBy: {
                createAt: 'asc'
            }
        })
        
        return memories
    })

    app.get('/memories/:id', async () => {
       
    })

    app.post('/memories', async (req, res) => {
        
    })

    app.put('/memories/:id', async (req, res) => {
        
    })

    app.delete('/memories/:id', async (req, res) => {
        
    })
}