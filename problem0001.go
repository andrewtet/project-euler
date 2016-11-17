package main

import "fmt"

func printInstructions() {
  fmt.Println("If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.")
  fmt.Println("Find the sum of all the multiples of 3 or 5 below 1000.")
}

func printAnswer(ans int) {
  fmt.Println("The answer is:", ans)
}

func sumMultiples(stopAt int) int{
  total := 0

  for i := 0; i < stopAt; i++ {
    if (i % 3 == 0) || (i % 5 == 0) {
      total += i
    }
  }

  return total
}

func main() {
  printInstructions()
  ans := sumMultiples(1000)
  printAnswer(ans)
}
