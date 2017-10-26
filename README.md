# Instructions
### Clone This Repo
`git clone https://github.com/gnomic7/Questions.git`

### Start chat app
`cd Questions/chat`
`node server.js`

### Using chat app
Open a few more terminal sessions and run
```
nc localhost 8001
```
on each terminal session.
Have fun chatting!!!

### Now the challenge (I want to avoid `very` while I am chatting)
The chat app automatically converts some of the words like `very hot, very angry` etc to a single word like `scalding, furious` respectively.
For example,
```
I am very happy translates to I am jubilant
```
but this has a problem. When you type
```
I am very angry because the weather is very hot
```
translates to
```
I am furious because the weather is very hot
```
and NOT
```
I am furious because the weather is scalding
```
    1. Update the code to translate multiple occurances of the *__very <something>__* to a single word (Refer to `very.json` for the list or possible translations)
### More challenges
Use nodejs code to solve the following problems:
  1. Write a function named `isDivisible(arr, divisor)` that takes an integer array and a `divisor` and returns 1 if all its elements are perfectly divisible by the divisor. Otherwise it returns 0 .
  For example
  ```
  isDivisible([6,18,9,12], 3) returns 1
  isDivisible([6,10,12,18], 3) returns 0
  ```
  2. Write a function named `nextPerfectSquare(arg)` that returns the first perfect square that is greater than the argument. A __perfect square__ is an integer that is equal to some integer squared.
  ```
    nextPerfectSquare(6) returns 9
    nextPerfectSquare(36) returns 49
  ```