import { z } from "zod"
import { IMemoryRepository } from "~/application/repository/memory"
import { ApiError } from "~/helper/apiError"

type UpdateMemoryRequest = {
  userId: string
  memoryId: string
  content?: string
  coverUrl?: string
  isPublic?: boolean
}

const updateMemorySchema = z.object({
  userId: z.string().cuid(),
  memoryId: z.string().cuid(),
  content: z.string().optional(),
  coverUrl: z.string().optional(),
  isPublic: z.boolean().optional(),
})

export class UpdateMemoryService {
  constructor(private readonly memoryRepository: IMemoryRepository) {}

  async execute(props: UpdateMemoryRequest) {
    const { content, coverUrl, isPublic, memoryId, userId } = updateMemorySchema.parse(props)

    const memory = await this.memoryRepository.findById(memoryId)

    if (memory.userId !== userId) {
      throw new ApiError("401", "Unauthorized", "Different user")
    }

    await this.memoryRepository.update({
      content,
      coverUrl,
      isPublic,
      id: memoryId,
    })
  }
}
