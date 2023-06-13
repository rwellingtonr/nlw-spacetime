import { FastifyInstance } from "fastify"
import * as controllers from "../controller"
import { verifyToken } from "../middleware/verifyToken"

export async function handleMemoriesRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyToken)

  app.get("/memories", controllers.handleListMemories)
  app.post("/memories", controllers.handleCreateMemory)
  app.get("/memories/:id", controllers.handleFindMemories)
  app.put("/memories/:id", controllers.handleUpdateMemories)
}
