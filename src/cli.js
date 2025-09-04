import readlineSync from 'readline-sync'

export function questUser() {
  const name = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${name}`)
  return name
}
