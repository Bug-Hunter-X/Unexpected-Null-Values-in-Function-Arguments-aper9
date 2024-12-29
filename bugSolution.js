function foo(a, b) {
  // Explicit null checks with a more informative error message
  if (a === null || b === null) {
    throw new Error('Null values are not allowed for this function.');
  }

  //Alternative Solution using a Ternary Operator
  // return (a !== null && b !== null) ? a + b : 0;

  return a + b;
}

console.log(foo(5, 5)); // Output: 10

//Demonstrates Error Handling
try{
  console.log(foo(null, 5));
} catch(error){
  console.error(error.message);
}

