# _Mr.Robogers Neighborhood_

#### By Donovan Weber

#### Mr.Robogers Neighborhood is a web application that will turn any positive integer you input into a string of "Beeps!", "Boops!", and "Won't you be my neighbor?"

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap 

## Description
Once a user submits any positive number they like Mr.Roboger will return every number starting at 1 to the users input and replace all instances of the number 3 with "Won't you be my neighbor". The application will also replace any instance of 2 when a 3 isn't present with "Boop!" and any instance of 1 when 3 or 2 are not present with "Beep!"

## Setup/Installation Requirements

* Clone my MrRogobers-Project repository from Github
* Go to the first level of the directory
* Open mrrogober/index.html

## Known Bugs

No known bugs contact me at [donovanweber03@gmail.com](mailto:donovanweber03@gmail.com) if any bugs are found.

## Specs

Describe: digitReplacer()

Test: "It should return an array of numbers from 0 to the user's inputted number."
Code: digitReplacer(7)
let arrayOfNumbers= [];
for(let i = 1; i <= inputtedNumber; i++) {
    arrayOfNumbers.push(i);
Expected Output:[1,2,3,4,5,6,7] 

Test: "It should return "Wont you be my neighbor?" when the user inputs a number the number 3 inside of an array."
Code: digitReplacer(3)
if ((arrayOfString[i]+'').indexOf('3') > -1) {
      arrayOfString.splice(i, 1, "Won't you be my neighbor? ");
Expected Output: [1,2,"Wont you be my neighbor?"]

Test:"It should replace all numbers with a digit of 2 with "Boop!" and if the number has a 3 it will still turn into "Won't you be my neighbor?"
Code: digitReplacer(13)
if ((arrayOfString[i]+'').indexOf('3') > -1) {
      arrayOfString.splice(i, 1, "Won't you be my neighbor? ");
    } else if ((arrayOfString[i]+'').indexOf('2') > -1) {
      arrayOfString.splice(i, 1, "Boop! ");
Expected Output: [1,"Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,11,"Boop!","Won't you be my neighbor?"] 

Test: "It should replace all numbers with  digit of 1 with "Beep!" only if they do not have any digits with 2 or 3."
Code: digitReplacer(13);
if ((arrayOfString[i]+'').indexOf('3') > -1) {
      arrayOfString.splice(i, 1, "Won't you be my neighbor? ");
    } else if ((arrayOfString[i]+'').indexOf('2') > -1) {
      arrayOfString.splice(i, 1, "Boop! ");
    } else if ((arrayOfString[i]+'').indexOf('1') > -1) {
      arrayOfString.splice(i, 1, "Beep! ");
    } else {
    
    }
  };
  Expected Output: ["Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,"Beep!","Boop!","Won't you be my neighbor?"] 

## License

[MIT](https://choosealicense.com/licenses/mit/)