import chalk from 'chalk'
import { startGreetings, randomGen, questUser } from './misc.js'

export function calcGame() {
  let name = startGreetings()

  console.log(chalk.underline(`What is the result of the expression?`))

  function gameRound(firstNum, secondNum, sign) {
    // выводим вопрос
    console.log(`Question: ${firstNum} ${sign} ${secondNum}`)
    // спрашиваем ответ
    let userAnswer = questUser('Your answer: ')
    return userAnswer
  }

  let roundCounter = 0
  while (roundCounter < 3) {
    const firstNum = randomGen()
    const secondNum = randomGen()
    const signNum = randomGen(3)
    let sign
    let rigthAnswer
    switch (signNum) {
      case 1: { // +
        rigthAnswer = firstNum + secondNum
        sign = '+'
        break
      }
      case 2: { // -
        rigthAnswer = firstNum - secondNum
        sign = '-'
        break
      }
      case 3: { // *
        rigthAnswer = firstNum * secondNum
        sign = '*'
      }
    }
    const userAnswer = gameRound(firstNum, secondNum, sign)

    if (userAnswer == rigthAnswer) {
      console.log(`Correct!`)
      roundCounter += 1
    }
    else {
      console.log(chalk.red(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'`))
      console.log(`Let's try again, ${name}!`)
      roundCounter = 4
    }
    if (roundCounter === 3) {
      console.log(`Congratulations, ${name}!`)
    }
  }
}
