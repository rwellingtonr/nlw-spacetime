import { FastifyRequest, FastifyReply } from "fastify"

export interface IBaseController {
  (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply>
}
