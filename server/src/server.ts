import fastify from "fastify"
import process from "node:process"
import helmet from "@fastify/helmet"
import cors from "@fastify/cors"
import { environment } from "./config/environment"
import { handleRoutes } from "./infra/http/routes"
import { handleError } from "./helper/handleError"

const app = fastify({
  logger: true,
})
app.register(helmet)
app.register(cors)

app.register(handleRoutes)

app.setErrorHandler(handleError)

const bootstrap = async () => {
  try {
    await app.listen({
      port: environment.port,
      path: "0.0.0.0",
    })
    app.log.info(`Server is running process ${process.pid} on port ${environment.port}`)
  } catch (error) {
    app.log.error("Server Error: ", error)
  }
}
bootstrap()
