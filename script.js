// js code for uppercase

document.querySelector(".uppercase").addEventListener('click' ,uppercase)

function uppercase(text){
text = document.querySelector(".textarea").value ;
let uppercase = text.toUpperCase();
document.querySelector('.textarea').value = uppercase;
}
// js code for lowercase

document.querySelector(".lowercase").addEventListener('click' ,lowercase)

function lowercase(){
const textArea =  document.querySelector(".textarea");   
textArea.value = textArea.value.toLowerCase();

}

// js code for reverse

document.querySelector(".reverseString").addEventListener('click' ,reverseString)

function reverseString(){
const textArea   =  document.querySelector(".textarea");
textArea.value = textArea.value.split("").reverse().join("");
}

// js code for titlecase
function convertToTitleCase() {
    const textArea   =  document.querySelector(".textarea");
 
    // Convert the string to an array of words
    let words = textArea.value.split(" ");
    
    // Loop through the array and capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    
    // Join the array back into a string
    let output = words.join(" ");
    
    // Display the output
    textArea.value = output;
  }
  

// js cod for counter word & vowels

function countWordsAndVowels() {
    var input = document.getElementById("input").value;
    var words = input.trim().split(/\s+/);
    var vowels = 'aeiouAEIOU';
    var vowelCount = 0;
  
    for (var i = 0; i < input.length; i++) {
      if (vowels.indexOf(input[i]) !== -1) {
        vowelCount++;
      }
    }
  
    document.getElementById("wordCount").textContent = words.length;
    document.getElementById("vowelCount").textContent = vowelCount;
  }
 
// js code popup for user interaction
  var quit = false;
let origVal = null;

while (!quit) {
  var str = prompt("Enter a string:", origVal || " ");

origVal = str;
if (("" + str).trim().length == 0) {
    quit = true;
    break;
}

  var operation = prompt("Select an operation:\n1. Uppercase\n2. Lowercase\n3. Title case\n4. Quit");

  switch (operation) {
    case "1":
      var result = str.toUpperCase();
      alert(result);
      break;
    case "2":
      var result = str.toLowerCase();
      alert(result);
      break;
    case "3":
      var result = toTitleCase(str);
      alert(result);
      break;
    case "4":
      quit = true;
      break;
    default:
      alert("Invalid operation.");
  }
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// js code for palindrome

// program to check if the string is palindrome or not

function checkPalindrome() {
    
const elemnent = document.getElementById("input");
const rezultat = document.getElementById("checkPalindrome");
const string =  elemnent.value;

    // find the length of a string
    const len = string.length;
    

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            rezultat.textContent =  'It is not a palindrome';
            return;
        }
    }
     rezultat.textContent = 'It is a palindrome';

}

function ProcessText() {
    checkPalindrome(); 
    countWordsAndVowels();

}