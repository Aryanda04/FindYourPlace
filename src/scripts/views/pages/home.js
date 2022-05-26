/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import data from '../../data/DATA.json';
// import untuk mengambiml dari file template
import { createRestoItemTemplate } from '../template/home-template';

const Home = {
  async render() {
    return `
      <h2>HOMEEE PAGEEEE</h2>
      <section id="explore-restaurant"></section>

    `;
  },
  async afterRender() {
    console.log(data);
    // const loading = document.querySelector('#loading');
    // const mainContainer = document.querySelector('#main-container');

    // list container untuk menentukan kontainer mana yang akan dipakai untuk digunakan pada template
    // disini menggunakan explore restaurant
    const listContainer = document.querySelector('#explore-restaurant');

    // Fungsi ini akan dipanggil setelah render()

    data.restaurants.forEach((restaurant) => {
      // ini untuk memasukkan data dari datajson ke dalam tamplate
      listContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
