import { Memory, Prisma } from "@prisma/client"

export interface IMemoryRepository {
  findMany(): Promise<Memory[]>
  findById(id: string): Promise<Memory | null>
  create(data: Prisma.MemoryCreateInput): Promise<void>
  update(data: Memory): Promise<void>
}
