// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// For example, all digits of the number 109 would be replaced with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// For example, all digits of the number 2099 would be replaced with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"





// Business Logic
function digitReplacer(inputtedNumber){
  let firstValue = inputtedNumber.split("").map((x) => parseInt(x));
  const secondArray = [];
  console.log(firstValue)
  for (let i = 0; i <= inputtedNumber; i-- ) {
    return secondArray.push(firstArray);
  };
  console.log(secondArray);
  
  
  
}
digitReplacer("7");
// const secondArray = firstArray.fill().map((i) => i++);