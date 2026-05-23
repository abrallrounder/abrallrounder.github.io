let bars =
document.querySelectorAll(
".bar"
);

bars.forEach(bar=>{

let width =
bar.getAttribute(
"data-width"
);

setTimeout(()=>{

bar.style.width=
width;

},300);

});