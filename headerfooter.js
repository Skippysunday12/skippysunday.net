class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    .nav {
      background-color: #ed6a66;
      width: 100%;
      height: 50px;
      position: fixed;
      left: 0px;
      top: 0px;
      z-index: 5000;
    }

    .navlink {
      position: absolute;
      top: 10px;
      font-size: 25px;
      color: white;
      text-decoration: none;
    }

    #homelink {
      left: 40%;
    }

    #aboutlink {
      left: 50%;
    }

    #projectslink {
      left: 60%;
    }
    </style>
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
