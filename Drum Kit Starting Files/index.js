//Detecting button press
var numofkeys=document.querySelectorAll(".drum").length;
for(var i=0;i<numofkeys;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        makeAnimation(buttonInnerHTML);
        
    }
);
}
//detecting keyboard press
var d=document.addEventListener("keypress",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
         break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
         break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
         break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
         break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
         break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
         break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
         break;
        
    }

}

function makeAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
   //d activeButton.currentTime=0;
    setTimeout(function(){
        activeButton.classList.remove("pressed");},100);

}


// var audio=new Audio("sounds/crash.mp3");
//         audio.play();

// function handleClick(){
//     alert("I got clicked");
// }





// document.querySelector(".drum").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked");
// }