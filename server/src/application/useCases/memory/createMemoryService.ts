import { IMemoryRepository } from "~/application/repository/memory"
import { z } from "zod"

type CreateMemoryRequest = {
  userId: string
  content: string
  coverUrl: string
  isPublic?: boolean
}
const createMemorySchema = z.object({
  userId: z.string().cuid(),
  content: z.string(),
  coverUrl: z.string(),
  isPublic: z.boolean().optional().default(false),
})

export class CreateMemoryService {
  constructor(private readonly memoryRepository: IMemoryRepository) {}

  async execute(props: CreateMemoryRequest) {
    const { content, coverUrl, isPublic, userId } = createMemorySchema.parse(props)

    await this.memoryRepository.create(userId, { content, coverUrl, isPublic })
  }
}
