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
      left: 38%;
    }

    #aboutlink {
      left: 48%;
    }

    #projectslink {
      left: 58%;
    }

    .imglink{
      position: absolute;
      top: 2.5;
    }

    #ghlink {
      left: 10px;
    }

    #discordlink {
      left: 80px;
    }

    #gmaillink {
      left: 150px;
    }
    </style>
    <div class="nav">
      <a class="imglink" id="ghlink" href="https://github.com/Skippysunday12" target="_blank">
        <img src="images/gh.png" alt="Github Link" width="45" height="45"/></a>
      <a class="imglink" id="discordlink" href="https://discord.gg/hTQjfpChma" target="_blank">
        <img src="images/discord.png" alt="Discord Link" width="45" height="45"/></a>
      <a class="imglink" id="gmaillink" href="mailto:skippysunday@gmail.com" target="_blank">
        <img src="images/gmail.png" alt="Gmail Link" width="45" height="45"/></a>
      <a class="navlink" id="homelink" href="index.php">Home</a>
      <a class="navlink" id="aboutlink" href="about.php">About</a>
      <a class="navlink" id="projectslink" href="projects.php">Projects</a>
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
