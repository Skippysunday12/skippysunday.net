class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="nav">
      <a class="navlink" id="homelink" href="#">Home</a>
      <a class="navlink" id="aboutlink" href="">About</a>
      <a class="navlink" id="projectslink" href="#">Projects</a>
    </div>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer">

      </div>
    `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
