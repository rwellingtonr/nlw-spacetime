import { MemoryRepository } from "~/infra/repository/memory"
import { IBaseController } from "../IBaseController"
import { UpdateMemoryService } from "~/application/useCases/memory"

type UpdatePrams = {
  id: string
}
type UpdateMemoryDTO = {
  content?: string
  coverUrl?: string
  isPublic?: boolean
}

export const handleUpdateMemories: IBaseController = async (request, reply) => {
  const { id } = request.params as UpdatePrams
  const { content, coverUrl, isPublic }: UpdateMemoryDTO = request.body

  const service = new UpdateMemoryService(new MemoryRepository())

  await service.execute({
    memoryId: id,
    content,
    coverUrl,
    isPublic,
    userId: request.user.sub,
  })
  return reply.status(200).send()
}
