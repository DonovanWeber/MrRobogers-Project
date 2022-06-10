// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// For example, all digits of the number 109 would be replaced with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// For example, all digits of the number 2099 would be replaced with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
// For example, all digits of the number 32 would be replaced with "Won't you be my neighbor?"





// Business Logic
function digitReplacer(inputtedNumber) {
  
  
 
  let arrayOfNumbers= [];
  for(let i = 1; i <= inputtedNumber; i++) {
    arrayOfNumbers.push(i)

  };
  console.log(arrayOfNumbers);
  const arrayOfString = arrayOfNumbers.map(x => x.toString());
  for (let i = 0; i <= arrayOfString.length; i++) {
    arrayOfString[i]
    console.log(arrayOfString[i])
    if (arrayOfString[i].includes('3')) {
      arrayOfString.splice()
      console.log("includes 3");
    };
  };

  console.log(arrayOfString);
 

};
digitReplacer(30);


