class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
<img class="img-logo" src="../images/logo/FYP-Logo.png" alt="FYP Logo">        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/wisata">Wisata</a></li>
            <li><a href="#/umkm">UMKM</a></li>
            <li><a href="#/budaya">Budaya</a></li>
          </ul>
        </nav>
    </header>
        `;
  }
}

customElements.define('custom-navbar', Navbar);
