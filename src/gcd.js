/* Вычисляет НОД, принимает два случайных числа */

function iter(min, maj) {
  if (maj % min === 0) {
    return min
  }
  let newMin = maj % min
  let newMaj = min
  return iter(newMin, newMaj)
}

export function findGCD(num1, num2) {
  let maj // majority
  let min // minority
  let result

  if (num1 === num2) {
    return num1
  }

  if (num1 > num2) {
    maj = num1
    min = num2
  }
  else {
    maj = num2
    min = num1
  }
  result = iter(min, maj)
  return result
}
