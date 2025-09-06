import chalk from 'chalk'
import { randomGen, startGreetings, questUser } from './misc.js'
import { isPrime } from './isPrime.js'

export function primeGame() {
  let name = startGreetings()
  console.log(chalk.underline(`Answer "yes" if given number is prime. Otherwise answer "no".`))

  function gameRound(num) {
    // выводим вопрос
    console.log(`Question: ${num}`)
    // спрашиваем ответ
    let userAnswer = questUser('Your answer: ')
    return userAnswer
  }

  let roundCounter = 0
  while (roundCounter < 3) {
    let number = randomGen()
    let rightAnswer = isPrime(number) ? 'yes' : 'no'
    let userAnswer = gameRound(number)

    if (userAnswer === rightAnswer) {
      console.log(`Correct!`)
      roundCounter += 1
    }
    else {
      console.log(chalk.red(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`))
      console.log(`Let's try again, ${name}!`)
      roundCounter = 4
    }

    if (roundCounter === 3) {
      console.log(`Congratulations, ${name}!`)
    }
  }
}
