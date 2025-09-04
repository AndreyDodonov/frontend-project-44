/* этот модуль будет принимать в качестве аргумента с вопросом и возвращать ответ юзера
*/
import readlineSync from 'readline-sync'
import chalk from 'chalk'
import crypto from 'crypto'

export function questUser(questString) {
  const userAnswer = readlineSync.question(questString)
  return userAnswer
}

export function startGreetings() {
  console.log(chalk.blue(`Welcome to the Brain Games!`))
  let name = questUser(`May I have your name? `)
  console.log(chalk.bgYellowBright(chalk.black(`Hello, ${name}!`)))
  return name
}

export function randomGen(count = 99) {
  const arr = new Uint8Array(1)
  crypto.getRandomValues(arr)
  return (arr[0] % count) + 1
}
