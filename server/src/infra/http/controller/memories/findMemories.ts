import { IBaseController } from "../IBaseController"

export const handleFindMemories: IBaseController = async (request, reply) => {
  return reply.status(200).send()
}
