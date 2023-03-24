const num1= Math.floor(Math.random()*10);
const num2= Math.floor(Math.random()*10);
const form=document.querySelector("form");
const input=document.querySelector("input");

const q=document.querySelector("h1");
q.innerHTML="what is "+ num1+" multiply by "+num2+" ?";
let score=JSON.parse(localStorage.getItem("score"));

const sc=document.querySelector("h4")

if(!score){
    score=0;
}
sc.innerHTML='score:'+score;

const correct=num1*num2;
form.addEventListener("submit",function(){
    const ans= +input.value;
    if(ans===correct){
        score++;
        updatelocalstorage();
    }
    else{
        score--;
        updatelocalstorage();
    }
});
function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))


}