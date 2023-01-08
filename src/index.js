module.exports = function toReadable (number) {
  if (number === 0) {return 'zero'}
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let result = 'zero'
  if (number < 20){
    result = units[number]
  } else if (number < 100) {
    result = `${tens[Math.trunc(number / 10)]} ${units[number % 10]}`
  } else {
    if (number % 100 < 20) {
      result = `${units[Math.trunc(number / 100 )]} hundred ${units[number % 100]}`
    } else {
      result = `${units[Math.trunc(number / 100 )]} hundred ${tens[Math.trunc(number % 100 / 10)]} ${units[number % 10]}`
    }
  }
  return result.trimEnd()
}
