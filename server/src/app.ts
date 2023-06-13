import * as routes from "./infra/http/routes"
import fastify from "fastify"
import helmet from "@fastify/helmet"
import cors from "@fastify/cors"
import { handleError } from "./helper/handleError"
import fastifyJwt from "@fastify/jwt"
import { environment } from "./config/environment"

const app = fastify({
  logger: true,
})

app.register(helmet)
app.register(cors)
app.register(fastifyJwt, {
  secret: environment.jwtSecret,
})

for (const key in routes) {
  app.register(routes[key])
}

app.setErrorHandler(handleError)

export { app }
