const para=document.getElementById("demo");

function testHandler(){
  const name=prompt("Enter your name");
  para.innerHTML=`Your name is ${name}`
}
