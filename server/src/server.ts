import fastify from "fastify"
import process from "node:process"
import helmet from "@fastify/helmet"
import cors from "@fastify/cors"
import { environment } from "./config/environment"

const app = fastify({
  logger: true,
})
app.register(helmet)
app.register(cors)

app
  .listen({
    port: environment.port,
    path: "0.0.0.0",
  })
  .then(() => app.log.info(`Server is running process ${process.pid} on port ${environment.port}`))
