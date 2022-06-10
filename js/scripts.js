// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// For example, all digits of the number 109 would be replaced with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// For example, all digits of the number 2099 would be replaced with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"





// Business Logic
function digitReplacer(inputtedNumber) {
  let firstArrayValue = inputtedNumber.split().map((x)=> parseInt(x));
  let secondArray = Array(firstArrayValue[0]).fill(1).map( (_, i) => i + 1);
  const thirdArray = secondArray.toString().split(',').map((x)=> parseInt(x));
  console.log(thirdArray);
  // console.log(thirdArray)
  let replaceArray = [];
  for(let i = 0; i < thirdArray.length; i++) {
    if (thirdArray.includes(3)) {
     replaceArray = thirdArray.push("Won't you be my neighbor?");
     console.log(replaceArray)
    }  else {
      return replaceArray
      
    };
  };
  };


digitReplacer("13");

