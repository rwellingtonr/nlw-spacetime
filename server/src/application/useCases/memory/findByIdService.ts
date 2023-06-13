import { IMemoryRepository } from "~/application/repository/memory"
import { ApiError } from "~/helper/apiError"
import { z } from "zod"

const propertiesSchema = z.object({
  memoryId: z.string().cuid(),
  userId: z.string().cuid(),
})

type FindByIdRequest = {
  memoryId: string
  userId: string
}

export class FindByIdService {
  constructor(private readonly memoryRepository: IMemoryRepository) {}

  async execute({ memoryId, userId }: FindByIdRequest) {
    propertiesSchema.parse({ memoryId, userId })
    const memory = await this.memoryRepository.findById(memoryId)

    if (!memory.isPublic && memory.userId !== userId) {
      throw new ApiError("401", "Unauthorized", "You cannot see this memory!")
    }

    return {
      memory,
    }
  }
}
