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



stringIncludes("banana", "a")
//true
stringIncludes("banana", "d")
//false


//time complexity is expressed in terms of the length of the input. The second sentence about big O, coefficients, and lower order terms we'll talk about in the sections to come.
