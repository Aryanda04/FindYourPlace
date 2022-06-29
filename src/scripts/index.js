import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/jumbotron.css';
import '../styles/footer.css';
import '../styles/home.css';
import '../styles/umkm.css';
import '../styles/budaya.css';
import '../styles/wisata.css';
import App from './views/app';

import './views/component/custom-footer';
import './views/component/custom-navbar';
import './views/component/custom-jumbotron';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  const ig = document.createElement('script');
  ig.src = '//www.instagram.com/embed.js';
  document.body.appendChild(ig);
});
