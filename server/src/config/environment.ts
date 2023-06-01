import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
})

const env = envSchema.safeParse(process.env)
if (!env.success) {
  throw new Error(`Invalid environment variables, ${JSON.stringify(env.error)}`)
}
export const environment = {
  port: env.data.PORT,
}
