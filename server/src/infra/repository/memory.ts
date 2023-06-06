import { Memory, Prisma } from "@prisma/client"
import { prisma } from "../database"
import { IMemoryRepository } from "~/application/repository/memory"

export class MemoryRepository implements IMemoryRepository {
  async findMany(): Promise<Memory[]> {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: "asc",
      },
    })
    return memories
  }
  async findById(id: string): Promise<Memory | null> {
    const memory = await prisma.memory.findUnique({ where: { id } })
    return memory
  }
  async create(data: Prisma.MemoryCreateInput): Promise<void> {
    await prisma.memory.create({ data })
  }
  async update({ id, ...data }: Memory): Promise<void> {
    await prisma.memory.update({
      where: { id },
      data,
    })
  }
}
