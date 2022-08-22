type User = {
  username: string,
  password: string
}

type VerifyUserFn = (user: User, sentUser: User) => boolean

const verifyUser: VerifyUserFn = (user: User, sentUser: User) => {
  return user.username === sentUser.username && user.password === sentUser.password
}

const bdUser = { username: 'Laian', password: '123456' }
const sentUser = { username: 'Laian', password: '123456' }
const loggedUser = verifyUser(bdUser, sentUser)
console.log(loggedUser)
