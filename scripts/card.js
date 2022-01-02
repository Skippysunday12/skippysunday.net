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
          text-align: center;
          position: relative;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        #${this.getAttribute('textid')}-img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          padding: 0px;
          position: relative;
          top: 10px;
        }

        #${this.getAttribute('textid')}-title {
          top: 50px;
        }

        #${this.getAttribute('textid')}-type {
          top: 55px;
        }

        #${this.getAttribute('textid')} {
          top: 60px;
        }
      </style>
      <div class="card">
        <img id="${this.getAttribute('textid')}-img" src="${this.getAttribute('img')}" alt="Project Icon" height="${this.getAttribute('height')}" width="${this.getAttribute('width')}"/>
        <p id="${this.getAttribute('textid')}-title">${this.getAttribute('title')}</p>
        <p id="${this.getAttribute('textid')}-type">Type: ${this.getAttribute('project-type')}</p>
        <p id="${this.getAttribute('textid')}">${this.getAttribute('text')}</p>
      </div>
    `;
  }
}

customElements.define("project-card", Card);
