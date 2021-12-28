var up = true;
var start = document.getElementById('start');

function bounce() {
  if(up) {
    start.style.top = '78%';
    up = false;
  }

  else {
    start.style.top = '80%';
    up = true;
  }
}

setInterval(bounce, 1000);
