let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2025 - birthYear; // update to 2024, if necessary
   let myCity = document.querySelector(".city").value;
    // 1. Declare a variable to save the value of the city the user is from.

    // 2. Below write your sentences! 
let result = "My name is " + myName + " I'm in a " + mood + " mood. " + " So I eat " + food + " to feel better. " +  " Some people question why I eat " + food + " at the big age of " + age + " , and to that I say welcome to "+ myCity;
results.innerHTML = result    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.


});