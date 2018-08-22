
var wordarr= ["DATABASE","ICECREAM","CHIPOTLE","NOVEMBER","VIOLENCE","SANDWICH","TOGETHER",
                ];       //array of words

var word= wordarr[Math.floor(Math.random() * wordarr.length)];      //to pick a random word
var letter;  
var lives=5 ;   
var counter=0;
var foundMatch = false;

function random(game) { 
    
    var arr= word.split('');
    console.log(arr);
    
    for (var i = 0; i < arr.length; i++) {
        if(game == arr[i]){
        // document.getElementById('block' +i).innerText= game;  
        document.querySelector('#block' +i).innerHTML=game;  
        counter++;
    }
        if(counter>arr.length) {
            document.querySelector('#mylives').innerHTML = 'You lose';
            setTimeout(function(){
                location.reload()
            },2000)
        }
    }
}       
//did we find a match? no? remove a life, call livescounter()

// function livescounter(){
//     var showlives = document.getElementById("mylives");
//     showlives.innerHTML = "You have " + lives + " lives";
//     if(lives<1){
//         showlives.innerHTML = "Game Over";
//     } 
//     // else  {
//     //     // alert("not a valid letter");
//     // }
// }
// livescounter();
function playagain() {
    location.reload();
}


document.addEventListener('keypress', function(e){
        letter = e.key.toUpperCase();
        // document.getElementById('input').innerText = letter;
        random(letter);
            
})
function quit() {
    window.close();
}