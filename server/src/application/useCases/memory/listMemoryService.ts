import { IMemoryRepository } from "~/application/repository/memory"

type ListMemoriesRequest = {
  userId: string
}

type ListMemoryResponse = {
  id: string
  coverUrl: string
  content: string
}
export class ListMemoryService {
  constructor(private readonly memoryRepository: IMemoryRepository) {}

  async execute({ userId }: ListMemoriesRequest): Promise<ListMemoryResponse[]> {
    const memories = await this.memoryRepository.findMany(userId)
    const mappedMemories = memories.map((memorie) => ({
      id: memorie.id,
      coverUrl: memorie.coverUrl,
      content: memorie.content.substring(0, 110).concat("..."),
    }))
    return mappedMemories
  }
}
