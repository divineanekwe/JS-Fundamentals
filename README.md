# JS-Fundamentals

This repository contains solutions to the JavaScript fundamentals tasks for Week 3 of the ALX Front-End Web Development program. These scripts cover basic JavaScript concepts, argument handling, loops, and function definition, all executed using Node.js.

## How to Run

To run any of the JavaScript files in this repository, you need to have Node.js installed on your machine.
Once Node.js is installed, navigate to the root directory of this repository in your terminal and execute the desired script using the `node` command followed by the filename.

**Example:**

node 0-javascript_is_amazing.js


## Tasks

### 0. First constant, first print

This script prints the string "JavaScript is amazing" to the console.

**Constraints:**

* A constant variable `myVar` must be used.

* `console.log(...)` must be used for output.

* `var` is not allowed.

**File:** `0-javascript_is_amazing.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 0-javascript_is_amazing.js
JavaScript is amazing


### 1. 3 languages

This script prints three distinct lines to the console, each declaring a language.

**Constraints:**

* `console.log(...)` must be used for output.

* `var` is not allowed.

**File:** `1-multi_languages.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 1-multi_languages.js
C is fun
Python is cool
JavaScript is amazing


### 2. Arguments

This script prints a message to the console based on the number of arguments passed to it.

**Constraints:**

* `console.log(...)` must be used for output.

* `var` is not allowed.

* References `process.argv` for argument access.

**File:** `2-arguments.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 2-arguments.js
No argument
divineanekwe@frontend:~/JS-Fundamentals$ node 2-arguments.js Best
Argument found
divineanekwe@frontend:~/JS-Fundamentals$ node 2-arguments.js Best School
Arguments found


### 3. Value of my argument

This script prints the first argument passed to it. If no arguments are provided, it prints "No argument".

**Constraints:**

* `console.log(...)` must be used for output.

* `var` and `length` are not allowed.

**File:** `3-value_argument.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 3-value_argument.js
No argument
divineanekwe@frontend:~/JS-Fundamentals$ node 3-value_argument.js School
School


### 4. Create a sentence

This script prints two arguments passed to it, formatted as " `<arg1>` is `<arg2>` ".

**Constraints:**

* `console.log(...)` must be used for output.

* `var` is not allowed.

**File:** `4-concat.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 4-concat.js c cool
c is cool
divineanekwe@frontend:~/JS-Fundamentals$ node 4-concat.js c
c is undefined
divineanekwe@frontend:~/JS-Fundamentals$ node 4-concat.js
undefined is undefined


### 5. An Integer

This script prints "My number: `<integer>`" if the first argument can be converted to an integer. Otherwise, it prints "Not a number".

**Constraints:**

* `console.log(...)` must be used for output.

* `var` and `try/catch` are not allowed.

**File:** `5-to_integer.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 5-to_integer.js
Not a number
divineanekwe@frontend:~/JS-Fundamentals$ node 5-to_integer.js 89
My number: 89
divineanekwe@frontend:~/JS-Fundamentals$ node 5-to_integer.js "89"
My number: 89
divineanekwe@frontend:~/JS-Fundamentals$ node 5-to_integer.js 89.89
My number: 89
divineanekwe@frontend:~/JS-Fundamentals$ node 5-to_integer.js School
Not a number


### 6. Loop to languages

This script prints three lines ("C is fun", "Python is cool", "JavaScript is amazing") using an array of strings and a loop.

**Constraints:**

* `console.log(...)` must be used for output.

* `var` and any `if/else` statements are not allowed.

* Only one `console.log` call is permitted.

* A loop (e.g., `while`, `for`) must be used.

**File:** `6-multi_languages_loop.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 6-multi_languages_loop.js
C is fun
Python is cool
JavaScript is amazing


### 7. I love C

This script prints "C is fun" a specified number of times (`x`), where `x` is the first argument. If the argument is not a valid integer, it prints "Missing number of occurrences".

**Constraints:**

* `console.log(...)` must be used for output.

* `var` is not allowed.

* Only two `console.log` calls are permitted.

* A loop (e.g., `while`, `for`) must be used.

**File:** `7-multi_c.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 7-multi_c.js 2
C is fun
C is fun
divineanekwe@frontend:~/JS-Fundamentals$ node 7-multi_c.js
Missing number of occurrences
divineanekwe@frontend:~/JS-Fundamentals$ node 7-multi_c.js -3

(No output for negative numbers as per example)

### 8. Square

This script prints a square of 'X' characters, where the size of the square is determined by the first argument. If the argument is not a valid integer, it prints "Missing size".

**Constraints:**

* The character 'X' must be used.

* `console.log(...)` must be used for output.

* `var` is not allowed.

* A loop (e.g., `while`, `for`) must be used.

**File:** `8-square.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 8-square.js
Missing size
divineanekwe@frontend:~/JS-Fundamentals$ node 8-square.js School
Missing size
divineanekwe@frontend:~/JS-Fundamentals$ node 8-square.js 2
XX
XX
divineanekwe@frontend:~/JS-Fundamentals$ node 8-square.js 6
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
divineanekwe@frontend:~/JS-Fundamentals$ node 8-square.js -3

(No output for negative numbers as per example)

### 9. Add

This script prints the addition of two integers passed as arguments. It defines a function `add(a, b)` for the calculation.

**Constraints:**

* A function with the prototype `function add(a, b)` must be defined.

* `console.log(...)` must be used for output.

* `var` is not allowed.

**File:** `9-add.js`

**Example Usage:**

divineanekwe@frontend:~/JS-Fundamentals$ node 9-add.js
NaN
divineanekwe@frontend:~/JS-Fundamentals$ node 9-add.js 1
NaN
divineanekwe@frontend:~/JS-Fundamentals$ node 9-add.js 1 7
8
divineanekwe@frontend:~/JS-Fundamentals$ node 9-add.js 13 89
102
