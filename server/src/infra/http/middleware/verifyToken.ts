import { FastifyReply, FastifyRequest } from "fastify"
import { app } from "~/app"

export const verifyToken = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    await request.jwtVerify()
  } catch (error) {
    app.log.error("Error: ", error)
    return reply.status(401).send("Unauthorized!")
  }
}
