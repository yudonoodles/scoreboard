let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let currentHomeScore = 0;
let currentGuestScore = 0;


function add1Home(){
   currentHomeScore= currentHomeScore+1;
   homeScore.textContent = currentHomeScore;
}
function add2Home(){
   currentHomeScore= currentHomeScore+2;
   homeScore.textContent = currentHomeScore;
}
function add3Home(){
   currentHomeScore= currentHomeScore+3;
   homeScore.textContent = currentHomeScore;
}
function add1Guest(){
   currentGuestScore= currentGuestScore+1;
   guestScore.textContent = currentGuestScore;
}
function add2Guest(){
   currentGuestScore= currentGuestScore+2;
   guestScore.textContent = currentGuestScore;
}
function add3Guest(){
   currentGuestScore= currentGuestScore+3;
   guestScore.textContent = currentGuestScore;
}




