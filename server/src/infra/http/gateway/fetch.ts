export async function postHttp<T>(url: string, body: any = {}): Promise<T> {
  const request = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
  const data = await request.json()
  return data
}
export async function getHttp<T>(url: string, auth?: string): Promise<T> {
  const request = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${auth}`,
    },
  })
  const data = await request.json()
  return data
}
