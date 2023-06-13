import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  GITHUB_CLIENT_SECRET: z.string().min(10),
  GITHUB_CLIENT_ID: z.string().min(6),
  JWT_SECRET: z.string().min(8),
})

const env = envSchema.safeParse(process.env)
if (!env.success) {
  throw new Error(`Invalid environment variables, ${JSON.stringify(env.error)}`)
}
export const environment = {
  port: env.data.PORT,
  database: env.data.DATABASE_URL,
  githubClientSecret: env.data.GITHUB_CLIENT_SECRET,
  githubClientId: env.data.GITHUB_CLIENT_ID,
  jwtSecret: env.data.JWT_SECRET,
}
