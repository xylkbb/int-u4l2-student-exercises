let buttonOne = document.querySelector(".button-one");
let captionOne = document.querySelector(".caption-one");
let buttonTwoElm = document.querySelector(".button-two")
let captionTwoElm = document.querySelector(".caption-two")


buttonOne.addEventListener("click", function() {
    let spideyCaption = document.querySelector(".comment-one").value; 
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".


    // 2. Display the variable spidyCaption to captionOne.
    captionOne.innerHTML = spideyCaption;


});

buttonTwoElm.addEventListener("click", function() {
    let kermitCaption = document.querySelector(".comment-two").value; 
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".


    // 2. Display the variable spidyCaption to captionOne.
    captionTwoElm.innerHTML = kermitCaption;


});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.