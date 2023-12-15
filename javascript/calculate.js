price=parseInt(document.getElementsByClassName("price").value);
var sum1=0;
function sum(get){
    sum1+=get;
    console.log(sum1);
    document.getElementById("hello").innerHTML=sum1;
}
function deletion(get){
   sum1=get;
   console.log(sum1);
   document.getElementById("hello").innerHTML=sum1;
}
function show(){
    document.getElementById("result").innerHTML=sum1;
}
function go(){
 
    window.location.href="signup.html";
}
function pay(){
    window.location.href="mainpage.html";
    alert("Your order has been successfully placed. Kindly wait for an acknowledgement");

}

function blur() {
  if(!input.value.includes('@')) { // not email
    input.classList.add('invalid');
    error.innerHTML = 'Please write a correct email.'
  }
};
function mob() {
    if(input.value.includes('+')) { 
      input.classList.add('invalid');
      error.innerHTML = 'Please write a correct number.'
    }
  };
 