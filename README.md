# JavaScript Null Check Error: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `Uncaught TypeError: Cannot read properties of null (reading 'length')`.  The error occurs when a function attempts to access the `length` property of a variable that unexpectedly holds a null value.

The `bug.js` file contains the erroneous code, which demonstrates how null can cause an error when not handled properly. The `bugSolution.js` file provides a corrected version of the code.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred text editor or IDE.
3. Run `bug.js`. You will see the error message in your console. 
4. Run `bugSolution.js`. You will see the expected output, demonstrating how null values should be handled.

## Solution

The key to preventing this error is to perform explicit null checks before attempting to access the `length` property or any other property of an object. The solution employs a simple `if` statement to check for null before proceeding.