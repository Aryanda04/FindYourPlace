import data from '../../data/Wisata.json';
import { createWisataItemTemplate } from '../template/wisata-template';

const Wisata = {
  async render() {
    return `
        <h2>Tempat wisata  page</h2>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    console.log(data);
    const listContainer = document.querySelector('#explore-wisata');

    data.Wisata.forEach((wisataBelitung) => {
      listContainer.innerHTML += createWisataItemTemplate(wisataBelitung);
    });
  },
};

export default Wisata;
