import { Memory, Prisma } from "@prisma/client"

export interface IMemoryRepository {
  findMany(userId: string): Promise<Memory[]>
  findById(id: string): Promise<Memory | null>
  create(userId: string, data: Prisma.MemoryCreateWithoutUserInput): Promise<void>
  update(data: Prisma.MemoryUncheckedUpdateInput): Promise<void>
}
