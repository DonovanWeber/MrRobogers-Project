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
    arrayOfNumbers.push(i);
  };
  let arrayOfString = arrayOfNumbers.map(x => x.toString());
  for (let i = 0; i <= arrayOfString.length; i++) {
    arrayOfString[i]
  
    if ((arrayOfString[i]+'').indexOf('3') > -1) {
      arrayOfString.splice(i, 1, "Won't you be my neighbor? ");
    } else if ((arrayOfString[i]+'').indexOf('2') > -1) {
      arrayOfString.splice(i, 1, "Boop! ");
    } else if ((arrayOfString[i]+'').indexOf('1') > -1) {
      arrayOfString.splice(i, 1, "Beep! ");
    } else {

    }
  };
  console.log(arrayOfString.join(''));
  return arrayOfString.join('');
};


// ui logic
$(document).ready(function() {
  $("form.form").submit(function(event) {
    event.preventDefault();
    const inputtedValue = $("#inputtedValue").val();
    const modifiedValue = digitReplacer(inputtedValue);
    $(".hide-result").show();
    $("#output1").text(modifiedValue);
    console.log(inputtedValue);
  });
});



