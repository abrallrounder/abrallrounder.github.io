let powers=

document.querySelectorAll(
".power"
);

powers.forEach(power=>{

let value=

power.getAttribute(
"data-power"
);

let degree=

(value/100)*360;

setTimeout(()=>{

power.style.background=

`conic-gradient(

white ${degree}deg,

#222 ${degree}deg

)`;

},500);

});