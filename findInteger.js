/* Excercise : Using node.js (v20), write a program that finds the smallest positive integer that when represented in base 10, moving the least significant digit
 to become the most significant digit, the new integer is exactly triple the original integer. For example, 14 becomes 41 which is close to triple but not exact. Another close example is 103 becoming 310, again very close to triple but not exact. The program
 must complete in less than 5 seconds on a modern laptop, printing the integer to the console. Please submit one node.js source file.
  */

 // Main function to find out the integer
function findInteger() {
  let number = 1;

  while (true) {

    // Convert the original number to reframed number with least significant to most significant 
    const reversedNumber = GetConvertedNumber(number);

    // Check if the converted number is exactly three times the original number
    if (reversedNumber == 3 * number) {
      return number;
    }

    // Increment to the next number and continue the search
    number++;
  }
}

function GetConvertedNumber(num) {
   // Convert the number to a string
  const numStr = num.toString();

   // Extract the least significant digit
  const leastSignificantDigit = numStr[numStr.length - 1];

  // Remove the least significant digit
  const withoutLeastSignificant = numStr.slice(0, -1);

  // Move the least significant digit to the most significant position
  const convertedNumber = leastSignificantDigit + withoutLeastSignificant;

  return parseInt(convertedNumber);
}


const res = findInteger();
console.log(`The smallest positive integer is: ${res}`);