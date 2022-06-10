// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// For example, all digits of the number 109 would be replaced with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// For example, all digits of the number 2099 would be replaced with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"





// Business Logic
function digitReplacer(inputtedNumber) {
  const firstArrayValue = inputtedNumber.split().map((x)=> parseInt(x));
  const secondArray = Array(firstArrayValue[0]).fill(1).map( (_, i) => i + 1);
  let thirdArray = secondArray.toString().split(',');
  console.log(secondArray);
  console.log(thirdArray)
  let replaceArray = [];
  for(let i = 0; i < thirdArray.length; i++) {
    if (thirdArray.includes('3')) {
     replaceArray = thirdArray.replace('3', "Won't you be my neighbor?"); 
    }  else (!thirdArray.includes('3')); {
      replaceArray.push(thirdArray);
    };
    return replaceArray
  };
  }


digitReplacer("13");

