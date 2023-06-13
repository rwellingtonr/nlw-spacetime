import { RegisterService } from "~/application/useCases/authenticate/registerService"
import { IBaseController } from "../IBaseController"
import { UserRepository } from "~/infra/repository/user"

export const handleRegister: IBaseController = async (request, reply) => {
  const code = request.query["code"] as string

  const repository = new UserRepository()
  const service = new RegisterService(repository)
  const { user } = await service.execute({ code })

  const token = await reply.jwtSign(
    {
      name: user.name,
      avatarUrl: user.avatarUrl,
    },
    {
      sign: {
        sub: user.id,
        expiresIn: "5d",
      },
    },
  )

  return reply.status(200).send({ token })
}
