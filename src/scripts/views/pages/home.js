/* eslint-disable no-console */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import data from '../../data/Budaya.json';
// import untuk mengambiml dari file template
import { createBudayaItemTemplate } from '../template/home-template';

const Home = {
  async render() {
    return `
    <custom-jumbotron></custom-jumbotron>
      <h2>HOMEEE PAGEEEE</h2>
      <div class="main-scroll-div">
        <div>
          <button class="icon" id="btnl"><i class="fas fa-angle-double-left"></i></button>
        </div>
          <div class="cover">
            <div class="scroll-images" id="explore-restaurant">
            </div>
          </div>
        <div>
        <button class="icon" id="btnr"><i class="fas fa-angle-double-right"></i></button>
        </div>
      </div>

    `;
  },
  // <section id="explore-restaurant"></section>

  async afterRender() {
    console.log(data);
    const arrBudaya = [];
    const keys = Object.keys(data);

    keys.forEach((key) => {
      // console.log(key);
      arrBudaya.push(...data[key]);
      console.log(data[key]);
    });
    console.log(arrBudaya);

    // const loading = document.querySelector('#loading');
    // const mainContainer = document.querySelector('#main-container');

    // list container untuk menentukan kontainer mana yang akan dipakai untuk digunakan pada template
    // disini menggunakan explore restaurant
    const listContainer = document.querySelector('#explore-restaurant');
    const iconleft = document.querySelector('#btnl');
    iconleft.addEventListener('click', async () => {
      const left = document.querySelector('.scroll-images');
      left.scrollBy(350, 0);
    });

    const iconright = document.querySelector('#btnr');
    iconright.addEventListener('click', async () => {
      const left = document.querySelector('.scroll-images');
      left.scrollBy(-350, 0);
    });

    // Fungsi ini akan dipanggil setelah render()

    arrBudaya.forEach((i) => {
      listContainer.innerHTML += createBudayaItemTemplate(i);
    });
  },

};

export default Home;
