class Card extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .card {
          background-color: var(--blue);
          height: 500px;
          width: 400px;
          border-radius: 50px;
          transition: box-shadow 0.25s, background-color 0.25s;
          position: relative;
        }
        .card:hover {
          box-shadow: 0px 0px 36px 5px var(--gray);
          background-color: #0F5B95;
        }

        p {
          color: var(--white);
          text-decoration: none;
          text-align: center;
          position: relative;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        #${this.getAttribute('textid')}-div {
          height: 250px;
          width: 400px;
          position: absolute;
          top: 0px;
          left: 0px;
        }

        #${this.getAttribute('textid')}-img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          padding: 0px;
          position: relative;
          top: 25px;
        }

        #${this.getAttribute('textid')}-title {
          top: 301px;
        }

        #${this.getAttribute('textid')}-type {
          top: 304px;
        }

        #${this.getAttribute('textid')} {
          top: 307px;
        }

        #${this.getAttribute('textid')}-gh {
          position: relative;
          display: block;
          margin: auto;
          top: 160px;
        }
      </style>
      <div class="card">
        <div id="${this.getAttribute('textid')}-div"><img id="${this.getAttribute('textid')}-img" src="${this.getAttribute('img')}" alt="Project Icon" height="${this.getAttribute('height')}" width="${this.getAttribute('width')}"/></div>
        <p id="${this.getAttribute('textid')}-title"><strong>${this.getAttribute('title')}</strong></p>
        <p id="${this.getAttribute('textid')}-type">Type: ${this.getAttribute('project-type')}</p>
        <p id="${this.getAttribute('textid')}">${this.getAttribute('text')}</p>
        <a id="${this.getAttribute('textid')}-gh" href="${this.getAttribute('gh')}" target="_blank"><img id="${this.getAttribute('textid')}-gh" src="images/gh.png" alt="Github" height="32" width="32"/></a>
      </div>
    `;//All required attributs: textid, img, height, width, text, title, project-type, gh, textheightmodifier
  }
}

customElements.define("project-card", Card);
