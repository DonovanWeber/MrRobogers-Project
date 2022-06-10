// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// For example, all digits of the number 109 would be replaced with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// For example, all digits of the number 2099 would be replaced with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"





// Business Logic
function digitReplacer(inputtedNumber) {
  const firstArrayValue = inputtedNumber.split().map((x)=> parseInt(x));
  const secondArray =   Array(firstArrayValue[0]).fill(1).map( (_, i) => i + 1);
  for(let i = 0; i <= secondArray.length; i++) {
    if (secondArray[i] === 3) {
      secondArray[i] = "Won't you be my neighbor?"
    } 
  };
 return secondArray
};

digitReplacer("3");

