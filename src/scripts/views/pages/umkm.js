import data from '../../data/UMKM.json';
import { createUmkmItemTemplate } from '../template/umkm-template';
const UMKM = {
  async render() {
    return `
        <h2>UMKM EXPLORE</h2>
        <section id="explore-umkm"></section>

      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    console.log(data);
    const listContainer = document.querySelector('#explore-umkm');

    data.banten.forEach((umkmbanten)=>{
      listContainer.innerHTML += createUmkmItemTemplate(umkmbanten)
    })  
  },
};

export default UMKM;
