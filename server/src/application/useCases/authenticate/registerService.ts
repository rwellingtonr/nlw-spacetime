import { User } from "@prisma/client"
import { z } from "zod"
import { IUserRepository } from "~/application/repository/user"
import { ApiError } from "~/helper/apiError"
import { getUser } from "~/infra/provider/github"

type RegisterRequest = {
  code: string
}
type RegisterResponse = {
  user: User
}

export class RegisterService {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(props: RegisterRequest): Promise<RegisterResponse> {
    const validateSchema = z.object({
      code: z.string(),
    })

    const { code } = validateSchema.parse(props)

    const userResponse = await getUser(code)
    if (!userResponse.user.id) {
      throw new ApiError("404", "Not Found:", "User not found!")
    }

    let user = await this.userRepository.findByGithubId(userResponse.user.id)

    if (!user) {
      user = await this.userRepository.create({
        avatarUrl: userResponse.user.avatar_url,
        githubId: userResponse.user.id,
        login: userResponse.user.login,
        name: userResponse.user.name,
      })
    }

    return {
      user,
    }
  }
}
