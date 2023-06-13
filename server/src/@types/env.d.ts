declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      GITHUB_CLIENT_SECRET: string
      GITHUB_CLIENT_ID: string
      DATABASE_URL: string
      PORT: string
      JWT_SECRET: string
    }
  }
}

export {}
