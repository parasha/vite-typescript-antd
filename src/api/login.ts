// mock
export function getUserInfo(): Promise<MockRes> {
  return new Promise(res => {
    setTimeout(() => {
      res({ code: 0, data: { userid: 1, username: 'parasha' } })
    }, 500)
  })
}