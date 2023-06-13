import { FastifyError, FastifyReply, FastifyRequest } from "fastify"
import { ApiError } from "./apiError"
import { ZodError } from "zod"

export function handleError(err: FastifyError, request: FastifyRequest, reply: FastifyReply) {
  if (/prisma/g.test(err.message)) {
    return reply.status(400).send({
      message: "Prisma Error",
      issue: err.message,
    })
  }

  if (err instanceof ApiError) {
    return reply.status(err.statusCode).send({
      message: err.message,
      issue: err.issue,
    })
  }

  if (err instanceof ZodError) {
    return reply.status(400).send({
      message: err.message,
      issue: err.format(),
    })
  }

  return reply.status(500).send({
    message: "Internal Server Error",
    issue: err?.message,
  })
}
