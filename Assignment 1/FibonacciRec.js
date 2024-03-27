/*
  Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

function fibonacci(n) { 
  if (n <= 1) { 
      return n; 
  } 
  return fibonacci(n - 1) + fibonacci(n - 2); 
} 

function fibs(n) { 
  let result = []; 
  for (let i = 0; i < n; i++) { 
      result.push(fibonacci(i) )
  } 
  console.log(result); 
};

fibs(8)