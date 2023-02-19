// js code for uppercase

document.querySelector(".uppercase").addEventListener('click' ,uppercase)

function uppercase(text){
text = document.querySelector(".textarea").value ;
let uppercase = text.toUpperCase();
document.querySelector('.textarea').value = uppercase;
}
// js code for lowercase

document.querySelector(".lowercase").addEventListener('click' ,lowercase)

function lowercase(text){
text = document.querySelector(".textarea").value ;
let lowercase = text.toLowerCase();
document.querySelector('.textarea').value = lowercase;
}

// js code for reverse
document.querySelector(".reverseString").addEventListener('click' ,reverseString)

function reverseString(text){
text = document.querySelector(".textarea").value ;
let reverseString = text.split("").reverse().join("");
document.querySelector('.textarea').value = reverseString;
}

// js code for titlecase
function convertToTitleCase() {
    // Get the user input from the textarea
    let userInput = document.getElementById("userInput").value;
    
    // Convert the string to an array of words
    let words = userInput.split(" ");
    
    // Loop through the array and capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
    
    // Join the array back into a string
    let output = words.join(" ");
    
    // Display the output
    document.getElementById("output").innerHTML = output;
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
 
// js code user interaction
  var quit = false;

while (!quit) {
  var str = prompt("Enter a string:");
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
