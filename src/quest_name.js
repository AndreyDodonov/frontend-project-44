/* этот модуль будет принимать в качестве аргумента с вопросом и возвращать ответ юзера
*/
import readlineSync from 'readline-sync'
import chalk from 'chalk'

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

export function randomGen() {
  return Math.floor(Math.random() * 99) + 1
}
