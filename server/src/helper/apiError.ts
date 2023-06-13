type ErrorCodes = "400" | "401" | "403" | "404" | "409"

export class ApiError extends Error {
  statusCode: string
  issue: string
  constructor(code: ErrorCodes = "400", message: string, issue: string) {
    super(message)
    this.issue = issue
    this.statusCode = code
    Error?.captureStackTrace(this, this.constructor)
  }
}
