import { CreateMemoryService } from "~/application/useCases/memory"
import { IBaseController } from "../IBaseController"
import { MemoryRepository } from "~/infra/repository/memory"

type CreateMemoryDTO = {
  content: string
  coverUrl: string
  isPublic: boolean
}

export const handleCreateMemory: IBaseController = async (request, reply) => {
  const { content, coverUrl, isPublic } = request.body as CreateMemoryDTO

  const service = new CreateMemoryService(new MemoryRepository())

  await service.execute({
    content,
    coverUrl,
    userId: request.user.sub,
    isPublic,
  })

  return reply.status(201).send()
}
