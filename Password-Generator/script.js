
let Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*";
Cresult = Capital.charAt(Math.floor(Math.random() * Capital.length));

function myPass1() {
  let StrongPass = "";
  for (var i = 0; i <18 ; i++) {
    var randomNumber = Math.floor(Math.random() * Capital.length);
    StrongPass += Capital.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("one").innerHTML = "Strong password :  "+StrongPass; 
}
function myPass2() {
  let NormalPass = "";
  for (var i = 0; i <8 ; i++) {
    var randomNumber = Math.floor(Math.random() * Capital.length);
    NormalPass += Capital.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("two").innerHTML = "General password :  "+NormalPass;
}
function myPass3() {
  const arr=["Password","123456","dragon","football","Nahi Sangnar","Tula tr mahit ahe","Bhupendra Jogi"]
  const randomElement = arr[Math. floor(Math. random() * arr. length)];
  document.getElementById("three").innerHTML = "Funny password :  "+randomElement;
}


