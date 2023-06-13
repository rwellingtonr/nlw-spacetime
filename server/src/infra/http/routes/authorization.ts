import { FastifyInstance } from "fastify"
import * as controller from "../controller"

export async function handleAuthorizationRoutes(app: FastifyInstance) {
  app.post("/register", controller.handleRegister)
}
