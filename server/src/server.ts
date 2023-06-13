import { app } from "./app"
import { environment } from "./config/environment"

const bootstrap = async () => {
  try {
    await app.listen({
      port: environment.port,
      path: "0.0.0.0",
    })
    app.log.info(`Server is running process ${process.pid} on port ${environment.port}`)
  } catch (error) {
    app.log.error("Server Error: ", error)
  }
}
bootstrap()
