//Write a program that takes a user’s input and prints the 
//numbers from one to the number the user entered. 
//However, for multiples of three print Fizz instead of the number 
//and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

function FizzBuzz(){
    let number = prompt("Which number do you want to be the last one of FizzBuzz?");
    for (let i = 1; i <= number; i++){
        if (i % 3 == 0){
            if (i % 5 == 0){
                console.log("FizzBuzz")
            } else {
                console.log("Fizz")
            }
            
        } else if (i % 5 == 0) {
            console.log("Buzz")
            }
        
         else {
            console.log(i)
        }
        
    }
}