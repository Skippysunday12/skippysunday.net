class Card extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .card {
          background-color: var(--blue);
          height: 500px;
          width: 400px;
          border-radius: 50px;
          transition: box-shadow 0.3s, background-color 0.3s;
          position: relative;
        }
        .card:hover {
          box-shadow: 0px 0px 36px 5px var(--gray);
          background-color: #0F5B95;
        }

        #${this.textid} {
          color: var(--white);
          position: absolute;
          left: 10px;
          top: 75%;
        }
      </style>
      <div class="card">
        <p id="${this.textid}">${this.getAttribute('text')}</p>
      </div>
    `;
  }
}

customElements.define("card-card", Card);
