const cards=
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener(
"click",
()=>{

card.style.transform=
"scale(.95)";

setTimeout(()=>{

card.style.transform=
"translateY(-10px)";

},150);

});

});