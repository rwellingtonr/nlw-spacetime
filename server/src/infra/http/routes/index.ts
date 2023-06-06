import { FastifyInstance } from "fastify"
import * as controllers from "../controller"

export function handleRoutes(app: FastifyInstance) {
  app.get("/memories", controllers.handleListMemories)
  app.post("/memories", controllers.handleCreateMemory)
  app.get("/memories/:id", controllers.handleFindMemories)
  app.put("/memories/:id", controllers.handleUpdateMemories)
}
