let number = 10; // you can take this number from user using prompt
let sum = 0;
// this will calculate sum of even numbers between 1 to number
for (let i = 1; i <= number; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}


console.log(sum); // this will show 30 because the sum of even number between 1 to 10 is 30
