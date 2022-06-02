/* eslint-disable no-console */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import dataWisata from '../../data/Wisata.json';
// import untuk mengambiml dari file template
import { createBudayaItemTemplate, createUMKMItemTemplate, createWisataItemTemplate } from '../template/home-template';

const Home = {
  async render() {
    return `
    <custom-jumbotron></custom-jumbotron>
      <h2 class="tagline-home">Recomendation Place</h2>
      <section id="wisata-section"></section>

      <h2 class="tagline-home">Culture</h2>
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
            <div class="scroll-images" id="budaya-section">
            </div>
          </div>
        <div class="scroll-icon-container-right">
        <button class="scroll-icon" id="btnr2"><i class="fas fa-angle-double-right"></i></button>
        </div>
      </div>
      <h2 class="tagline-home">UMKM</h2>

      <section id="umkm-section"></section>



    `;
  },

  async afterRender() {
    // console.log(data);
    const randomly = () => Math.random() - 0.4;
    const arrBudaya = [];
    const arrUMKM = [];
    const arrWisata = [];
    const arrItem = [];
    const keys = Object.keys(dataBudaya);
    const keys2 = Object.keys(dataUMKM);
    const keys3 = Object.keys(dataWisata);

    keys.forEach((key) => {
      arrBudaya.push(...dataBudaya[key]);
      arrItem.push(...dataBudaya[key]);
    });
    keys2.forEach((key) => {
      arrUMKM.push(...dataUMKM[key]);
      arrItem.push(...dataUMKM[key]);
    });
    const dynamicarrUMKM = [].concat(arrUMKM).sort(randomly);
    keys3.forEach((key) => {
      arrWisata.push(...dataWisata[key]);
      arrItem.push(...dataWisata[key]);
    });
    const dynamicarrWisata = [].concat(arrWisata).sort(randomly);
    console.log(arrItem);

    // const loading = document.querySelector('#loading');
    // const mainContainer = document.querySelector('#main-container');

    // list container untuk menentukan kontainer mana yang akan dipakai untuk digunakan pada template
    // disini menggunakan explore restaurant
    const budayaContainer = document.querySelector('#budaya-section');
    const umkmContainer = document.querySelector('#umkm-section');
    const wisataContainer = document.querySelector('#wisata-section');

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
    dynamicarrUMKM.slice(0, 4).forEach((i) => {
      umkmContainer.innerHTML += createUMKMItemTemplate(i);
    });

    arrBudaya.forEach((i) => {
      budayaContainer.innerHTML += createBudayaItemTemplate(i);
    });
    dynamicarrWisata.slice(0, 4).forEach((i) => {
      wisataContainer.innerHTML += createWisataItemTemplate(i);
    });
  },

};

export default Home;
