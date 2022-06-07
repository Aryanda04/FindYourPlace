/* eslint-disable no-console */
/* eslint-disable max-len */
// eslint-disable-next-line import/no-unresolved
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import dataWisata from '../../data/Wisata.json';
import {
  createBudayaHomeCardTemplate, createUMKMHomeCardTemplate, createOptionItemTemplate, createWisataHomeCardTemplate, createHomeScrollerTemplate,
} from '../template/home-template';

const Home = {
  async render() {
    return `
    <custom-jumbotron></custom-jumbotron>

        <section id="select-container"></section>

        <h2 class="tagline-home">Recomendation Place</h2>
        <section id="wisata-section"></section>

        <h2 class="tagline-home">Culture</h2>

        <section id="scroller-budaya"></section>
        
        
      
        <h2 class="tagline-home">UMKM</h2>
        <section id="umkm-section"></section>
    `;
  },

  async afterRender() {
    const randomly = () => Math.random() - 0.4;
    const arrBudaya = [];
    const arrUMKM = [];
    const arrWisata = [];
    const arrItem = [];
    const keys = Object.keys(dataBudaya);
    const keys2 = Object.keys(dataUMKM);
    const keys3 = Object.keys(dataWisata);
    const scrollerContainer = document.getElementById('scroller-budaya');
    scrollerContainer.innerHTML += createHomeScrollerTemplate();

    // OPTION SECTION
    const selectContainer = document.querySelector('#select-container');
    selectContainer.innerHTML += createOptionItemTemplate(keys);
    selectContainer.addEventListener('change', async () => {
      const val = document.getElementById('selectLocation').value;
      window.location.href = val;
    });

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

    dynamicarrUMKM.slice(0, 4).forEach((i) => {
      umkmContainer.innerHTML += createUMKMHomeCardTemplate(i);
    });

    arrBudaya.forEach((i) => {
      budayaContainer.innerHTML += createBudayaHomeCardTemplate(i);
    });
    dynamicarrWisata.slice(0, 4).forEach((i) => {
      wisataContainer.innerHTML += createWisataHomeCardTemplate(i);
    });
  },

};

export default Home;
