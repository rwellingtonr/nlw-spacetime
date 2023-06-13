import { Prisma, User } from "@prisma/client"

export interface IUserRepository {
  findByGithubId(id: number): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
