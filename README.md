# _Mr.Robogers Neighborhood_

#### By Donovan Weber

#### Application that decides which programming language you should start with.

## Technologies Used

* HTML
* CSS
* JavaScript


## Description

This webpage is a programming language suggester that helps beginner coders
or people intereseted in coding decide which language to start with. The webpage asks a series questions and based on the results provides a language you should start with.

## Setup/Installation Requirements

* Clone my language-suggester repository from Github
* Go to the first level of the directory
* Open language-suggester/index.html

## Known Bugs

No known bugs contact me at [donovanweber03@gmail.com](mailto:donovanweber03@gmail.com) if any bugs are 
found.

## Specs

Describe: digitReplacer()

Test: "It should return an integer when the user inputs a string of numbers"
code: digitReplacer("5")
Expected Output: 5 

Test: "It should return an array of numbers from 0 to the user's inputted number."
Code: digitReplacer("7")
const firstArrayValue = inputtedNumber.split().map((x)=> parseInt(x));
  const secondArray =   Array(firstArrayValue[0]).fill(1).map( (_, i) => i + 1);
Expected Output:[1,2,3,4,5,6,7] 

Test: "It should return "Wont you be my neighbor?" when the user inputs a number the number 3 inside of an array."
Code: digitReplacer("3")
const firstArrayValue = inputtedNumber.split().map((x)=> parseInt(x));
  const secondArray =   Array(firstArrayValue[0]).fill(1).map( (_, i) => i + 1);
  for(let i = 0; i <= secondArray.length; i++) {
    if (secondArray[i] === 3) {
      secondArray[i] = "Won't you be my neighbor?"
    } 
  };
Expected Output: [1,2,"Wont you be my neighbor?"]

Test:"It should replace all numbers with a digit of 3 with "Wont you be my neighbor"
Code: digitReplacer("13")
const firstArrayValue = inputtedNumber.split().map((x)=> parseInt(x));
  const secondArray =   Array(firstArrayValue[0]).fill(1).map( (_, i) => i + 1);
Expected Output: [1,2,"Won't you be my neighbor?",4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?"] 


## License

[MIT](https://choosealicense.com/licenses/mit/)