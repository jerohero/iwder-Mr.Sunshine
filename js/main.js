window.onload = () => {
traileriframe.onmouseover = traileriframe.onmouseout = handler;
const body = document.getElementById("js--body");
const trailer = document.getElementById("trailer");
const all = document.querySelectorAll("main > *");
const synopsis = document.getElementsByClassName("synopsis");


console.log(all);

function handler(event){
  if (document.documentElement.clientWidth > 640 ) {
    if(event.type == 'mouseover'){
      body.style.backgroundColor = "rgba(0,0,0,0.9)";

      for(let i = 0; i < all.length; i++){
        all[i].style.filter = "brightness(20%)";
      }
      for(let i = 0; i < synopsis.length; i++){
        synopsis[i].style.filter = "brightness(100%)";
      }
    }
    if(event.type == 'mouseout'){
      body.style.backgroundColor = "rgba(0,0,0,0)";

      for(let i = 0; i < all.length; i++){
        all[i].style.filter = "brightness(100%)";
      }
    }
  }
}

const castmemberCard = document.getElementsByClassName("castmember");
const castButton = document.getElementById("castButton");

for(let i = 0; i < castmemberCard.length; i++){
  if(i == 0){
    castmemberCard[i].style.backgroundColor = "#FF6D71";
  }
  else if(i == 1){
    castmemberCard[i].style.backgroundColor = "#FF6064";
  }
  else if(i == 2){
    castmemberCard[i].style.backgroundColor = "#FF5257";
  }
  else if(i == 3){
    castmemberCard[i].style.backgroundColor = "#FF484E";
  }
  else if(i == 4){
    castmemberCard[i].style.backgroundColor = "#FF5257";
  }
  else{
    castmemberCard[i].style.backgroundColor = "#FF6D71";
  }
}
}

const cast = document.getElementsByClassName("castmember");

function nextCast(){
  let lastindex;
  for (let i = 0; i < cast.length; i++) {
    if (cast[i].classList.contains("active")) {
      cast[i].className = "castmember";
      lastindex = i + 1;
    }
  }
  if (lastindex < cast.length) {
    cast[lastindex].className = "castmember active";
  }
  else {
    cast[0].className = "castmember active";
  }
}

function toMerch(){
  window.location.replace("/merch.html");
}
