/* eslint-disable no-plusplus */
import data from '../../data/UMKM.json';
import { createUmkmItemTemplate } from '../template/umkm-template';

const UMKM = {
  async render() {
    return `
    <custom-jumbotron></custom-jumbotron>
        <h2>UMKM EXPLORE</h2>
        <section id="explore-umkm"></section>

      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const keys = Object.keys(data);
    const listContainer = document.querySelector('#explore-umkm');
    for (let k = 0; k < keys.length; k++) {
      data[keys[k]].forEach((belitung) => {
        listContainer.innerHTML += createUmkmItemTemplate(belitung);
      });
    }
  },
};

export default UMKM;
