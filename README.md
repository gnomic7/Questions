# Instructions
### Clone This Repo
`git clone https://github.com/gnomic7/Questions.git`

### Start chat app
`cd Questions/chat`
`node server.js`

### Using chat app
Open a few more terminal sessions
`nc localhost 8001` on each terminal session
Have fun chatting!!!

## Now the challenge (I want to avoid `very` while I am chatting)
1. The chat app automatically converts some of the words like *very hot, very angry etc* to a single word *scalding, furious* for the first occurance of the combination. For example, _I am very happy_ translates to _I am jubilant_ but this has a problem. When I type _I am very angry because the weather is very hot_ translates to _I am furious because the weather is very hot_ and NOT _I am furious because the weather is scalding_
  1. Update the code to translate multiple occurances of the _very <something>_ to a single word (Refer `very.json` for the list)

2. Use nodejs code to solve the following problems:
  1. Write a function named _isDivisible_ that takes an integer array and a divisor and returns 1 if all its elements perfectly divisible by the divisor. Otherwise it returns 0 .
  2. Write a function named _nextPerfectSquare_ that returns the first perfect square that is greater than the argument. A _perfect square_ is an integer that is equal to some integer sqared. For example, if argument is 6 the function should return 9 (next perfect square to 6). If argument is 36 the function should return 49 as next perfect square and so on.