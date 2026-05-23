let search=
document.querySelector(
"#search"
);

search.addEventListener(
"keyup",

()=>{

let value=
search.value
.toLowerCase();

let cards=
document.querySelectorAll(
".card"
);

cards.forEach(card=>{

let text=
card.innerText
.toLowerCase();

if(
text.includes(value)
){

card.style.display=
"block";

}

else{

card.style.display=
"none";

}

})

});



document
.querySelectorAll(
".love"
)

.forEach(btn=>{

btn.onclick=()=>{

btn.innerHTML=
btn.innerHTML==="❤️"
?
"💖"
:
"❤️";

};

});