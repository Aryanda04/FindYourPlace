/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty-function */
import urlParser from '../../routes/url-parser';
import dataWisata from '../../data/Wisata.json';
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import dataTravel from '../../data/Travel.json';
import {
  createWisataDetailCardTemplate, createHeaderLocation, createUMKMDetailCardTemplate, createBudayaDetailCardTemplate, createTravelCardTemplate,
} from '../template/detail-template';

const DetailLocation = {
  async render() {
    return `
    <div class="container">
    <section id="header-section"></section>
    <h1 class="tagline-home"> Travel </h1>
    <section id="wisata-section-location"></section>
    <h1 class="tagline-home"> UMKM </h1>
    <section id="umkm-section-location"></section>
    <h1 class="tagline-home"> Culture </h1>
    <section id="budaya-section-location"></section>
    <h1 class="tagline-home"> Travel Recomendation </h1>
    <section id="travel-section-location"></section>


    </div>
    `;
  },
  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    // console.log(url.id);
    const headerContainer = document.querySelector('#header-section');
    headerContainer.innerHTML += createHeaderLocation(url);

    const wisataContainer = document.querySelector('#wisata-section-location');
    dataWisata[url.id].forEach((i) => {
      wisataContainer.innerHTML += createWisataDetailCardTemplate(i);
    });

    const umkmContainer = document.querySelector('#umkm-section-location');
    dataUMKM[url.id].forEach((i) => {
      umkmContainer.innerHTML += createUMKMDetailCardTemplate(i);
    });

    const budayaContainer = document.querySelector('#budaya-section-location');
    dataBudaya[url.id].forEach((i) => {
      budayaContainer.innerHTML += createBudayaDetailCardTemplate(i);
    });

    const travelContainer = document.querySelector('#travel-section-location');
    dataTravel[url.id].forEach((i) => {
      travelContainer.innerHTML += createTravelCardTemplate(i);
    });
  },

};

export default DetailLocation;
