# Unexpected Null Values in Function Arguments

This repository demonstrates a common JavaScript error related to unexpected null values passed as function arguments. The `foo` function attempts to handle null values gracefully by returning 0 if either `a` or `b` is null.  However, it highlights a scenario where a lack of robust input validation can lead to unexpected behavior.  The solution demonstrates a more robust approach to handling potential null inputs, enhancing the function's reliability.

## Bug

The provided code handles null arguments by returning 0. While this prevents errors, it doesn't explicitly validate the input, which can lead to logic errors if null values are not expected.

## Solution

The solution file shows a improved version of the function using a more robust check, using a ternary operator or explicit type checking depending on your requirements.