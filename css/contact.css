*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: 'Segoe UI', sans-serif;
}

body{
background:#050505;
color:white;
height:100vh;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
}

/* moving glow background */
.bg{
position:absolute;
width:100%;
height:100%;
background:
radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 30%),
radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06), transparent 35%);
animation: moveBg 10s infinite alternate ease-in-out;
}

@keyframes moveBg{
0%{transform:scale(1) rotate(0deg);}
100%{transform:scale(1.2) rotate(3deg);}
}

/* floating orb */
.glow-orb{
position:absolute;
width:300px;
height:300px;
background:white;
filter:blur(150px);
opacity:0.08;
border-radius:50%;
animation: float 6s infinite ease-in-out;
}

@keyframes float{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-60px);}
}

.container{
text-align:center;
z-index:2;
width:90%;
max-width:900px;
}

.title{
font-size:4rem;
letter-spacing:3px;
animation: fadeDown 1s ease;
}

.title span{
color:white;
text-shadow:0 0 20px white;
}

.subtitle{
color:#aaa;
margin-top:10px;
margin-bottom:40px;
animation: fadeDown 1.5s ease;
}

/* grid */
.grid{
display:grid;
grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));
gap:20px;
}

/* buttons */
.btn{
padding:18px;
background:rgba(255,255,255,0.03);
border:1px solid rgba(255,255,255,0.15);
color:white;
font-size:16px;
border-radius:15px;
cursor:pointer;
transition:0.4s;
backdrop-filter:blur(10px);
position:relative;
overflow:hidden;
}





/* glow hover */
.btn:hover{
transform:translateY(-6px) scale(1.03);
box-shadow:0 0 25px rgba(255,255,255,0.6);
border:1px solid white;
}

/* shine effect */
.btn::before{
content:"";
position:absolute;
top:0;
left:-100%;
width:100%;
height:100%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,0.2),transparent);
transition:0.6s;
}

.btn:hover::before{
left:100%;
}

/* back button */
.back{
display:inline-block;
margin-top:40px;
padding:10px 25px;
background:white;
color:black;
border-radius:30px;
text-decoration:none;
font-weight:bold;
transition:0.3s;
}

.back:hover{
transform:scale(1.08);
box-shadow:0 0 15px white;
}



/* animations */
@keyframes fadeDown{
from{opacity:0; transform:translateY(-20px);}
to{opacity:1; transform:translateY(0);}
}

/* Home */

.homeBtn{

position:fixed;

left:20px;
top:20px;

width:50px;
height:50px;

display:flex;

justify-content:center;
align-items:center;

border-radius:50%;

background:
rgba(255,255,255,.1);

backdrop-filter:
blur(10px);

border:
1px solid
rgba(255,255,255,.1);

color:white;

text-decoration:none;

font-size:24px;

z-index:999;

transition:.5s;

}


.homeBtn:hover{

transform:scale(1.1);

box-shadow:
0 0 20px
rgba(255,255,255,.3);

}
