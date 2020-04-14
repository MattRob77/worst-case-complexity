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

stringIncludes("banana", "a")
//true
stringIncludes("banana", "d")
//false


//time complexity is expressed in terms of the length of the input. The second sentence about big O, coefficients, and lower order terms we'll talk about in the sections to come.
