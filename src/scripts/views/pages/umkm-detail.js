/* eslint-disable no-plusplus */
/* eslint-disable no-empty-function */
import urlParser from '../../routes/url-parser';
import dataWisata from '../../data/Wisata.json';
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import { createMapsTemplate, createUMKMDetailTemplate } from '../template/detail-template';

const DetailUMKM = {
  async render() {
    return `
      <section id="detail"></section>
      <section id="maps-detail"></section>
    `;
  },
  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
    let arrItem = [];
    const keys = Object.keys(dataBudaya, dataWisata, dataUMKM);
    keys.forEach((key) => {
      arrItem.push([...dataBudaya[key] || [], ...dataWisata[key] || [], ...dataUMKM[key] || []]);
    });

    arrItem = arrItem.flat();

    const detailContainer = document.querySelector('#detail');
    const mapsContainer = document.querySelector('#maps-detail');

    for (let index = 0; index < arrItem.length; index++) {
      if (arrItem[index].id === url.id) {
        detailContainer.innerHTML += createUMKMDetailTemplate(arrItem[index]);
      }
    }

    for (let index = 0; index < arrItem.length; index++) {
      if (arrItem[index].id === url.id) {
        mapsContainer.innerHTML += createMapsTemplate(arrItem[index]);
      }
    }
  },

};

export default DetailUMKM;
