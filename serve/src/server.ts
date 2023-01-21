import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

/*
 Método HTTP: Get(buscar), Post(criar algo), Put(atualizar recurso por completo), 
 Patch(atualizar uma inf. específica), Delete(deletar um recurso)
*/

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany();
  return habits;
});

app.listen({
  port: 3333,
});
