#!/usr/bin/env node
import chalk from 'chalk'
import { startGreetings, questUser, randomGen } from '../src/quest_name.js'

// приветствуем и получаем имя
let name = startGreetings()

// выводим правила игры
console.log(chalk.underline(`Answer "yes" if the number is even, otherwise answer "no".`))

function gameRound(random) {
  // выводим вопрос
  console.log(`Question: ${random}`)
  // спрашиваем ответ
  let userAnswer = questUser('Your answer: ')
  return userAnswer
}

// game logic
let roundCounter = 0
while (roundCounter < 3) {
  // получаем случайное число и определяем чётность
  let random = randomGen()
  let isEven
  if (random % 2 === 0) {
    isEven = true
  }
  else {
    isEven = false
  }
  //
  if (isEven) {
    if (gameRound(random) === 'yes') {
      console.log(chalk.greenBright('Correct!'))
      roundCounter += 1
    }
    else {
      console.log(chalk.red(`Let's try again, ${name}!`))
      roundCounter = 4
    }
  }
  if (!isEven) {
    if (gameRound(random) === 'no') {
      console.log(chalk.greenBright('Correct!'))
      roundCounter += 1
    }
    else {
      console.log(chalk.red(`Let's try again, ${name}!`))
      roundCounter = 4
    }
  }
}
if (roundCounter === 3) {
  console.log(chalk.green(`Congratulations, ${name}!`))
}
