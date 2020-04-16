//Is the letter "a" in a given word "banana"

"banana".includes("a")

//examines each letter
function stringIncludes(word, letter) {
  let matches; // declare the variable
  for(let i = 0; < word.length; i++) {
    if(word[i] === letter) {
      matches = true
    }
  }
  return !!matches
}

//best case
let fruit = "banana"
let letter = "b"

function stringIncludes(fruit, letter) {
  alert('ask a six year old child if "banana" includes the letter b')
}

//sorting in alphabetical order

function sortString(string) {
  return string.split('').sort().join('')
}
sortString("banana")
//"aaabnn"
sortString("itwasthebestpftimesitwastheworseoftimes")
//"aabeeeeeeffhhiiiimmooorsssssstttttttwww"



stringIncludes("banana", "a")
//true
stringIncludes("banana", "d")
//false


//binarysearch
function binarySearch(string, letter) {
    var startpoint = 0
    var endpoint = string.length - 1;
    var guessPosition = parseInt((endpoint - startpoint)/2)
    while (startpoint != endpoint) {
      console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
        if (string[guessPosition] < letter) {
          console.log('too low')
            startpoint = guessPosition
            guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
        } else if(string[guessPosition] > letter) {
          console.log('too high')
            endpoint = guessPosition
            guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
        } else {
          console.log('just right')
            return true;
        }
    }
    if(string === letter){
      return true
    } else{
      console.log('sorry')
      return false;
    }
  }

  let string = "aabeeeeeeffhhiiiimmooorsssssstttttttwww"


 //Big - O Approximation

 function nSquared(string, letter) {
   let matches;
   for(let i = 0; i < string.length; i++) { //loop one
     for(let i = 0; i < string.length; i++) { //loop two

       ... //spread operator
     }
   }
 }

 nSquared("abc") //return function 

//time complexity is expressed in terms of the length of the input. The second sentence about big O, coefficients, and lower order terms we'll talk about in the sections to come.
