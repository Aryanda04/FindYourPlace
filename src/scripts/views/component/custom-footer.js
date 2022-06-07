/* eslint-disable require-jsdoc */
class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <div class="top-footer-container">
      <div class="footer-logo">
        <img src="../../images/logo/FYP-yellow.png" alt="FYP Logo"/>
      </div>
      <div class="footer-middle">
        <h3> About Us </h3>
        <P class="footer-middle-text"> Fond Your Place ialah website dimana anda dapat menemukan destinasi wisata, budaya, dan produk UMKM yang tersedia di wilayah tersebut
        </p>
        <a href="#/about"> meet our team </a>
      </div>
      <div class="footer-social-media">
      <h3> Find Us </h3>

      <a
      href="#/"
      class="fa fa-facebook"
      target="_blank"
    ></a>
    <a
      href="#/"
      class="fa fa-linkedin"
      target="_blank"
    ></a>
    <a
      href="#/"
      class="fa fa-instagram"
      target="_blank"
    ></a>
    <a
      href="#/"
      class="fa fa-github"
      target="_blank"
    ></a>
    <a
      href="#/"
      class="fa fa-link"
      target="_blank"
    ></a>
      </div>

    </div>
     <p class="footer-bottom-text">Copyright <i class="far fa-copyright"></i>2022 | Find Your Place.</p>
  
  </footer>

      `;
  }
}

customElements.define('custom-footer', CustomFooter);
