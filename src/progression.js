import { randomGen } from './misc.js'

export function progression() {
  let startNum = randomGen()
  let index = randomGen()
  let progression = [startNum]

  for (let i = 1; i <= 9; i += 1) {
    progression.push(startNum + (index * i))
  }
  return progression
}

export function progressionMasked(progression, idx) {
  let progressionArr = progression
  progressionArr[idx] = '..' // скрываем заданное число

  return progressionArr.join(', ') // возвращаем новый изменённый массив в виде строки
}
