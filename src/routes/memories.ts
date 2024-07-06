import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prima";
import { z } from "zod";

// Codificação de Rotas da tabela de memórias.
export async function memoriesRoutes(app: FastifyInstance) {
  app.get("/memories", async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createAt: "asc",
      },
    });

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memory.coverUrl,
        excerpt: memory.content.substring(0, 115).concat("..."),
      };
    });
  });

  app.get("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    return memory;
  });

  app.post("/memories", async (request, response) => {
    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      //userId: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: "4fd23e95-2ea8-4c90-8995-6893ca80d66f",
        //userId: request.body.userId,
        //createAt: new Date(),
      },
    });
    return memory;
  });

  app.put("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      content: z.string(),
      coverUrl: z.string(),
      //userId: z.string(),
      isPublic: z.coerce.boolean().default(false),
    });

    const { content, coverUrl, isPublic } = bodySchema.parse(request.body);

    const memory = await prisma.memory.update({
      where: {
        id: id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
        //userId: request.body.userId,
        //updateAt: new Date(),
      },
    });
    return memory
  });
  
  app.delete("/memories/:id", async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });
    const { id } = paramsSchema.parse(request.params);

    await prisma.memory.delete({
      where: {
        id: id,
      },
    });
  });
  
}
