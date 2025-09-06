import chalk from 'chalk'
import { startGreetings, randomGen, questUser } from './misc.js'
import { progression, progressionMasked } from './progression.js'

export function progressionGame() {
  let name = startGreetings()
  console.log(chalk.underline(`What number is missing in the progression?`))

  function gameRound(progression, idx) {
    // выводим вопрос
    console.log(`Question: ${progressionMasked(progression, idx)}`)
    // спрашиваем ответ
    let userAnswer = questUser('Your answer: ')
    return userAnswer
  }

  let roundCounter = 0
  while (roundCounter < 3) {
    let progressionArr = progression()
    let findIndex = randomGen(progressionArr.length)
    let rightAnswer = Number(progressionArr[findIndex])
    const userAnswer = Number(gameRound(progressionArr, findIndex))

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
