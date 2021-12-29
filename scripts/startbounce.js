var up = true;

function bounce() {
  var start = document.getElementsByClassName('bounce');
  for(let i = 0; i < start.length; i++) {
    if(up) {
      start[i].style.top = '78%';
    }

    else {
      start[i].style.top = '80%';
    }
  }

  up = !up;
}

setInterval(bounce, 1000);
