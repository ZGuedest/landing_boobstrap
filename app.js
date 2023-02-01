function fizzBuzz(number) {
  
  if(number%3==0 && number%5==0){
    number= "Fizzbuzz"
  }else if(number%5==0){
    number= "buzz"
  }else if(number%3==0 ){
    number= "Fizz"
  }

  return number
}


function test() {
  clearOutput()

  check(fizzBuzz(1), 1, 'fizzBuzz 1 es '+ fizzBuzz(1))

  check(fizzBuzz(3), "Fizz", 'fizzBuzz 3 es '+ fizzBuzz(3))

  check(fizzBuzz(5), "buzz", 'fizzBuzz 5 es '+ fizzBuzz(5))
  
  check(fizzBuzz(15), "Fizzbuzz", 'fizzBuzz 15 es '+ fizzBuzz(15))

}
 