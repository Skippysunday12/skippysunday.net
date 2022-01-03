class HomeNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    .about {
      max-width: 200px;
    }

    .about:hover > #aboutlink, #aboutimage {
      filter: brightness(50%);
    }

    #aboutlink {
      color: var(--white);
      text-decoration: none;
      transition: filter 0.125s;
      font-size: 25px;
    }

    #aboutimage {
      position: relative;
      top: 10px;
      right: 5px;
      filter: brightness(100%);
      transition: filter 0.125s;
    }
    </style>
    <div class="about">
      <a href="/about.php" id="aboutlink"><img src="/images/about.png" alt="About" width="48" height="48" id="aboutimage">About</a>
    </div>
    `;
  }
}

class ProjectsNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      .projects {
        max-width: 200px;
      }

      .projects:hover > #projectslink, #projectsimage {
        filter: brightness(50%);
      }

      #projectslink {
        color: var(--white);
        text-decoration: none;
        transition: filter 0.125s;
        font-size: 25px;
      }

      #projectsimage {
        position: relative;
        top: 15px;
        right: 5px;
        filter: brightness(100%);
        transition: filter 0.125s;
      }
      </style>
      <div class="projects">
        <a href="/projects.html" id="projectslink"><img src="/images/code.png" alt="Projects" width="48" height="48" id="projectsimage">Projects</a>
      </div>
    `;
  }
}

class ContactNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      .contact {
        max-width: 200px;
      }

      .contact:hover > #contactlink, #contactimage {
        filter: brightness(50%);
      }

      #contactlink {
        color: var(--white);
        text-decoration: none;
        transition: filter 0.125s;
        font-size: 25px;
      }

      #contactimage {
        position: relative;
        top: 15px;
        right: 5px;
        filter: brightness(100%);
        transition: filter 0.125s;
      }
      </style>
      <div class="contact">
        <a href="/contact.html" id="contactlink"><img src="/images/mail.png" alt="Contact" width="48" height="48" id="contactimage"/>Contact</a>
      </div>
    `;
  }
}

customElements.define("contact-nav", ContactNav);
customElements.define("projects-nav", ProjectsNav);
customElements.define("home-nav", HomeNav);
