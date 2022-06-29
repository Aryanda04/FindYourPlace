import data from '../../data/Wisata.json';
import { createWisataItemTemplate } from '../template/wisata-template';

const Wisata = {
  async render() {
    return `
        <h2>Tempat wisata  page</h2>
        <section id="explore-wisata"></section>

      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    // console.log(data);
    const contentWisata = [];
    const keys = Object.keys(data);

    keys.forEach((key) => {
      contentWisata.push(...data[key]);
      // console.log(data[key]);
    });
    // console.log(contentWisata);

    const listContainer = document.querySelector('#explore-wisata');

    contentWisata.forEach((wisata) => {
      listContainer.innerHTML += createWisataItemTemplate(wisata);
    });
  },
};

export default Wisata;
