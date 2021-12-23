class Picture extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      .iconholder {
        width: 10px;
        height: 10px;
        position: relative;
        top: 150px;
        left: 50px;
      }

      #iconimage {
        position: relative;
        bottom: 75px;
        background-color: #6c7474;
        border: 0px solid #6c7474;
        border-radius: 300px;
        padding: 0px;
        width: auto;
      }

      #welcometext {
        font-size: 100px;
        text-align: center;
        width: auto;
      }
      </style>

      <img src="images/icon.png" alt="Icon" class="fadein" id="iconimage" height="500" width="500"/>
    `;
  }
}

customElements.define("circle-picture", Picture);
