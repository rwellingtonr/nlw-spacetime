import { Memory, Prisma } from "@prisma/client"
import { prisma } from "../database"
import { IMemoryRepository } from "~/application/repository/memory"

export class MemoryRepository implements IMemoryRepository {
  async findMany(userId: string): Promise<Memory[]> {
    const memories = await prisma.memory.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "asc",
      },
    })
    return memories
  }
  async findById(id: string): Promise<Memory | null> {
    const memory = await prisma.memory.findUniqueOrThrow({ where: { id } })
    return memory
  }
  async create(userId: string, data: Prisma.MemoryCreateWithoutUserInput): Promise<void> {
    await prisma.memory.create({
      data: {
        content: data.content,
        coverUrl: data.coverUrl,
        isPublic: data.isPublic,
        userId,
      },
    })
  }
  async update({ id, ...data }: Prisma.MemoryCreateWithoutUserInput): Promise<void> {
    await prisma.memory.update({
      where: { id },
      data,
    })
  }
}
