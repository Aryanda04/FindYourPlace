/* eslint-disable require-jsdoc */
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer tabindex="0">
        <p class="footer-text">Copyright &#169 2022 - Find Your Place</p>
        </footer>
      `;
  }
}

customElements.define('custom-footer', CustomFooter);
