let a = document.getElementById("hr");
let b = document.getElementById("min");
let c = document.getElementById("sec");
let d = document.getElementById("ampm");
let e = document.getElementById("date");

let date = new Date();

function updateTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  

  a.innerHTML = h + " : ";
  b.innerHTML = m + " : ";
  c.innerHTML = s+ "-";
 
  if (h > 12) {
    a.innerHTML = h - 12 + " : ";
    d.innerHTML = "PM";
  }
}
updateTime();
setInterval(updateTime, 1000);

let fd= date.getDate()+ "-" + (date.getMonth()+1)+"-" + date.getFullYear()
e.innerHTML=fd;