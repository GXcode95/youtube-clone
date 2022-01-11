const addSpaceToNumber = (number) => {
  if (!number || "none") return
  if (number.length <= 3) return number

  let numberArray = number.split('')
  let formattedCount = ""
  
  let modulo = numberArray.length % 3
  formattedCount += numberArray.splice(0,modulo).join('')
  
  for (let i = 0; i < (number.length - modulo); i+=3) {
    formattedCount += " " + numberArray.splice(0,3).join('') 
  }
  
  return formattedCount
}

export default addSpaceToNumber