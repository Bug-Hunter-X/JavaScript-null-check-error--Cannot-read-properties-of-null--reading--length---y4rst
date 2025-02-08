function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null and undefined cases
  } else if (typeof x === 'object' && x.length !== undefined) {
    return x.length; // Handle objects with length property
  } else {
    return 0; // Or throw an error, depending on your needs
  }
}
console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0
console.log(foo('hello')); // Output: 0