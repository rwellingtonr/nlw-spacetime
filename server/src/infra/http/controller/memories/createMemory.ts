import { IBaseController } from "../IBaseController"

export const handleCreateMemory: IBaseController = async (request, reply) => {
  return reply.status(201).send()
}
