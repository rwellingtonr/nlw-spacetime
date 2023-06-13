import { Prisma, User } from "@prisma/client"
import { IUserRepository } from "~/application/repository/user"
import { prisma } from "../database"

export class UserRepository implements IUserRepository {
  async findByGithubId(id: number): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        githubId: id,
      },
    })
    return user
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({ data })
    return user
  }
}
