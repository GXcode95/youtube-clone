const addSpaceToNumber = (number) => {
  console.log("number",number)


  if (!number || number === "none") {
   console.log("je return")
    return "0"
  }

  console.log("type", typeof(number))
    number = number.toString()
  console.log("type2",typeof(number))

  if (number.length) {
    console.log("je return NUMBER")
    return number 
  }

  console.log("number last",number)

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