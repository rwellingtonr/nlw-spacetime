import { FindByIdService } from "~/application/useCases/memory"
import { IBaseController } from "../IBaseController"
import { MemoryRepository } from "~/infra/repository/memory"

type FindMemoriesDto = {
  id: string
}

export const handleFindMemories: IBaseController = async (request, reply) => {
  const { id } = request.params as FindMemoriesDto

  const service = new FindByIdService(new MemoryRepository())
  await service.execute({ userId: request.user.sub, memoryId: id })
  return reply.status(200).send()
}
