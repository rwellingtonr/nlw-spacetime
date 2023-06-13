import { ListMemoryService } from "~/application/useCases/memory"
import { IBaseController } from "../IBaseController"
import { MemoryRepository } from "~/infra/repository/memory"

export const handleListMemories: IBaseController = async (request, reply) => {
  const userId = request.user.sub

  const repository = new MemoryRepository()
  const listMemoryService = new ListMemoryService(repository)
  const result = await listMemoryService.execute({ userId })

  return reply.status(200).send(result)
}
