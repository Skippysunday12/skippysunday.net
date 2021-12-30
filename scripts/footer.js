class Footer extends HTMLElement {
  connectedCallback() {
    var date = this.getAttribute('date');

    this.innerHTML = `
    <style>
      .footer {
        background-color: var(--black);
        position: absolute;
        left: 0px;
        top: 400vh;
        width: 100vw;
        height: 100px;
      }

      #update {
        color: var(--white);
        position: absolute;
        right: 10px;
        bottom: 10px;
      }

      #homelink {
        transition: filter 0.125s;
        text-decoration: none;
        color: var(--white);
        font-size: 20px;
        position: absolute;
        top: 10px;
      }

      #homelink:hover {
        filter: brightness(50%);
      }

      #homeimage {
        position: relative;
        top: 5px;
      }
    </style>
    <div class="footer">
      <a href="index.html" id="homelink"><img src="images/home.png" alt="Home" width="48" height="48" id="homeimage">Go Home</a>
      <p id="update">Page last updated: ${date}</p>
    </div>
    `;
  }
}

customElements.define("custom-footer", Footer);
