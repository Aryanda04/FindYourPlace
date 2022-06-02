/* eslint-disable no-console */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import data from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
// import untuk mengambiml dari file template
import { createBudayaItemTemplate, createUMKMItemTemplate } from '../template/home-template';

const Home = {
  async render() {
    return `
    <custom-jumbotron></custom-jumbotron>
      <h2>HOMEEE PAGEEEE</h2>
      <div class="main-scroll-div">
      <div class="top-scroll-icon-container">
        <div class="scroll-icon-container">
          <button class="scroll-icon" id="btnl"><i class="fas fa-angle-double-left"></i></button>
        </div>
        <div class="scroll-icon-container-right-hidden">
        <button class="scroll-icon" id="btnr"><i class="fas fa-angle-double-right"></i></button>
        </div>
        </div>
          <div class="cover">
            <div class="scroll-images" id="explore-restaurant">
            </div>
          </div>
        <div class="scroll-icon-container-right">
        <button class="scroll-icon" id="btnr2"><i class="fas fa-angle-double-right"></i></button>
        </div>
      </div>
      <section id="umkm-section"></section>



    `;
  },

  async afterRender() {
    // console.log(data);
    const randomly = () => Math.random() - 0.4;
    const arrBudaya = [];
    const arrUMKM = [];
    const keys = Object.keys(data);
    const keys2 = Object.keys(dataUMKM);

    keys2.forEach((key) => {
      arrUMKM.push(...dataUMKM[key]);
      // console.log(dataUMKM[key]);
    });
    const dynamicarrUMKM = [].concat(arrUMKM).sort(randomly);
    console.log(dynamicarrUMKM);
    console.log(arrUMKM);
    keys.forEach((key) => {
      arrBudaya.push(...data[key]);
      // console.log(data[key]);
    });
    console.log(arrBudaya);

    // const loading = document.querySelector('#loading');
    // const mainContainer = document.querySelector('#main-container');

    // list container untuk menentukan kontainer mana yang akan dipakai untuk digunakan pada template
    // disini menggunakan explore restaurant
    const listContainer = document.querySelector('#explore-restaurant');
    const umkmContainer = document.querySelector('#umkm-section');

    const iconleft = document.querySelector('#btnl');
    iconleft.addEventListener('click', async () => {
      const left = document.querySelector('.scroll-images');
      left.scrollBy(350, 0);
    });
    const iconright1 = document.querySelector('#btnr');
    iconright1.addEventListener('click', async () => {
      const right = document.querySelector('.scroll-images');
      right.scrollBy(-350, 0);
    });
    const iconright2 = document.querySelector('#btnr2');
    iconright2.addEventListener('click', async () => {
      const right = document.querySelector('.scroll-images');
      right.scrollBy(-350, 0);
    });

    // Fungsi ini akan dipanggil setelah render()
    dynamicarrUMKM.slice(0, 6).forEach((i) => {
      umkmContainer.innerHTML += createUMKMItemTemplate(i);
    });

    arrBudaya.forEach((i) => {
      listContainer.innerHTML += createBudayaItemTemplate(i);
    });
  },

};

export default Home;
