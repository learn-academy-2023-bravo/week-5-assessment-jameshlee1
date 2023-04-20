// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe('codedMessage', () => {
    it("converts a to 4, e to 3, i to 1, and o to 0", () => {
      expect(codedMessage(secretCodeWordOne)).toEqual("L4ck4d41s1c4l");
      expect(codedMessage(secretCodeWordTwo)).toEqual("G0bbl3dyg00k");
      expect(codedMessage(secretCodeWordThree)).toEqual("3cc3ntr1c");
    });
  });


const secretCodeWordOne = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWordTwo = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWordThree = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.
// Pseudo: Create a function called codedMessage that takes in a string as a parameter. I will use the split method to return the string into an array. Then i will use the map method to loop through the array. Then using a conditional statement it will convert the letter to the number.

const codedMessage = (string) => {
    array = string.split("").map((value) => {
      if (value.toLowerCase() === "a") return "4";
      else if (value.toLowerCase() === "e") return "3";
      else if (value.toLowerCase() === "i") return "1";
      else if (value.toLowerCase() === "o") return "0";
      else return value;
    });
    return array.join("");
  };

//   $ /Users/learnacademy/Desktop/week-5-assessment-jameshlee1/node_modules/.bin/jest
//  PASS  ./code-challenges.test.js
//   codedMessage
//     ✓ converts a to 4, e to 3, i to 1, and o to 0 (1 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe('newArray', () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
        expect(newArray(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(newArray(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
// Pseudo: Create a function newArray that takes an array and string as a parameter. I will use the filter method. to filter out any strings in the array that does not have the given letter in either uppercase or lowercase.

const newArray = (array, letter) => {
    return array.filter((value) => value.includes(letter.toLowerCase()) || value.includes(letter.toUpperCase()))
}

// PASS  ./code-challenges.test.js
// newArray
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (1 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('fullHouse', () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse(handOne)).toEqual(true)
        expect(fullHouse(handTwo)).toEqual(false)
        expect(fullHouse(handThree)).toEqual(false)
        expect(fullHouse(handFour)).toEqual(true)
    })
})

const handOne = [5, 5, 5, 3, 3]
// Expected output: true
const handTwo = [5, 5, 3, 3, 4]
// Expected output: false
const handThree = [5, 5, 5, 5, 4]
// Expected output: false
const handFour = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
// Pseudo: Create a function fullHouse that takes in a  array then create another variable cards to input the key value. Then using a for loop to iterate the array. Then get the value for cards and compare the data from the array. Then return true if the values pulled from the cards are identical to the input array.

const fullHouse = (boat) => {
  const cards = {}
  for (const hand of boat) {
    if (cards[hand]) {
      cards[hand]++
    } else {
      cards[hand] = 1
    }
  }
  
  const values = Object.values(cards)
  return values.includes(2) && values.includes(3)
}

// PASS  ./code-challenges.test.js
//   fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a full house
