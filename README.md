# Instructions
### Clone This Repo
`git clone https://github.com/gnomic7/Questions.git`

### Start chat app
`cd Questions/chat`
`node server.js`

### Using chat app
Open a few more terminal sessions
`nc localhost 8001` on each terminal session.
Have fun chatting!!!

### Now the challenge (I want to avoid `very` while I am chatting)
1. The chat app automatically converts some of the words like **very hot, very angry etc** to a single word **scalding, furious**.
For example,
```__I am very happy__ translates to __I am jubilant__```
but this has a problem. When you type
``` __I am very angry because the weather is very hot__```
translates to
``` __I am furious because the weather is very hot__```
and NOT
``` __I am furious because the weather is scalding__```
    1. Update the code to translate multiple occurances of the *__very <something>__* to a single word (Refer to `very.json` for the list or possible translations)
### More challenges
Use nodejs code to solve the following problems:
  1. Write a function named `isDivisible(arr, divisor)` that takes an integer array and a `divisor` and returns 1 if all its elements are perfectly divisible by the divisor. Otherwise it returns 0 .
  For example
  ```
  isDivisible([6,18,9,12], 3) returns 1
  isDivisible([6,10,12,18], 3) returns 0
  ```
  2. Write a function named `nextPerfectSquare` that returns the first perfect square that is greater than the argument. A __perfect square__ is an integer that is equal to some integer squared.
  For example, if `argument` is 6 the function should return 9 (next perfect square to 6). If `argument` is 36 the function should return 49 as next perfect square and so on.