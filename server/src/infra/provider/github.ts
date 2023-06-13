import { environment } from "~/config/environment"
import { getHttp, postHttp } from "../http/gateway/fetch"

type User = {
  id: number
  login: string
  avatar_url: string
  name: string
}
type PostResponse = {
  access_token: string
}
type UserResponse = {
  user: User
}

export async function getUser(code: string) {
  const baseAuthUrl = "https://github.com/login/oauth/access_token"
  const params = `code=${code}&client_id=${environment.githubClientId}&client_secret=${environment.githubClientSecret}`

  const response = await postHttp<PostResponse>(`${baseAuthUrl}?${params}`)

  const baseUserUrl = "https://api.github.com/user"

  const userResponse = await getHttp<UserResponse>(baseUserUrl, response.access_token)
  return userResponse
}
