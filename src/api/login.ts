// mock
export function getUserInfo(): Promise<Res> {
  return new Promise(res => {
    setTimeout(() => {
      res({ code: 0, data: { userid: 1, name: 'parasha' } })
    }, 500)
  })
}