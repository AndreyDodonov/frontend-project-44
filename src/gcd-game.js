import chalk from 'chalk'
import { startGreetings, randomGen, questUser } from './misc.js'
import { findGCD } from './gcd.js'

export function gcdGame() {
  let name = startGreetings()

  console.log(chalk.underline(`Find the greatest common divisor of given numbers.`))

  function gameRound(firstNum, secondNum) {
    // выводим вопрос
    console.log(`Question: ${firstNum} ${secondNum}`)
    // спрашиваем ответ
    let userAnswer = questUser('Your answer: ')
    return userAnswer
  }

  let roundCounter = 0
  while (roundCounter < 3) {
    let firstNum = randomGen()
    let secondNum = randomGen()
    let rigthAnswer = Number(findGCD(firstNum, secondNum))

    const userAnswer = Number(gameRound(firstNum, secondNum))

    if (userAnswer === rigthAnswer) {
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
