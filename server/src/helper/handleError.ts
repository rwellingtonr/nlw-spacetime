import { FastifyError, FastifyReply, FastifyRequest } from "fastify"

export function handleError(err: FastifyError, request: FastifyRequest, reply: FastifyReply) {
  if (/prisma/g.test(err.message)) {
    return reply.status(400).send({
      message: "Prisma Error",
      issue: err.message,
    })
  }
  return reply.status(500).send({
    message: "Internal Server Error",
    issue: err?.message,
  })
}
