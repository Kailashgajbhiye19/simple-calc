function AddNum(){
  let a= document.getElementById("FirstBox").value;
  let b= document.getElementById("SecondBox").value;
  a = parseInt(a);
  b = parseInt(b);
  
  res= a + b ;
  let h1 =document.getElementById("result")
  h1.innerHTML="Result: " + res
}

function SubNum(){
  let a= document.getElementById("FirstBox").value;
  let b= document.getElementById("SecondBox").value;
  a = parseInt(a);
  b = parseInt(b);
  
  res= a - b ;
  let h1 =document.getElementById("result")
  h1.innerHTML="Result: " + res
}

function MulNum(){
  let a= document.getElementById("FirstBox").value;
  let b= document.getElementById("SecondBox").value;
  a = parseInt(a);
  b = parseInt(b);
  
  res= a * b ;
  let h1 =document.getElementById("result")
  h1.innerHTML="Result: " + res
}

function DivNum(){
  let a= document.getElementById("FirstBox").value;
  let b= document.getElementById("SecondBox").value;
  a = parseInt(a);
  b = parseInt(b);
  
  res= a / b ;
  let h1 =document.getElementById("result")
  h1.innerHTML="Result: " + res
}

function PowNum(){
  let a= document.getElementById("FirstBox").value;
  let b= document.getElementById("SecondBox").value;
  a = parseInt(a);
  b = parseInt(b);
  
  res= a ** b ;
  let h1 =document.getElementById("result")
  h1.innerHTML="Result: " + res
}