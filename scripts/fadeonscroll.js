let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.05
}

let elements = document.getElementsByClassName('fadeinwrapper');

let callback = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      var children = entry.target.children;
      for(let i = 0; i < children.length; i++) {
        children.item(i).classList.add('fadein');
      }
    }
  });
};

let observer = new IntersectionObserver(callback, options);

for(let i = 0; i < elements.length; i++) {
  observer.observe(elements[i]);
}
