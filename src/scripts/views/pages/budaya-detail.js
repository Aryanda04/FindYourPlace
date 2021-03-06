/* eslint-disable no-plusplus */
/* eslint-disable no-empty-function */
import urlParser from '../../routes/url-parser';
import dataWisata from '../../data/Wisata.json';
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import { createBudayaDetailTemplate, createVideoTemplate } from '../template/detail-template';

const DetailBudaya = {
  async render() {
    return `
    <section id="detail"></section>

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

    for (let index = 0; index < arrItem.length; index++) {
      if (arrItem[index].id === url.id) {
        detailContainer.innerHTML += createBudayaDetailTemplate(arrItem[index]);
      }
    }

    const videoContainer = document.querySelector('#budaya-video');
    for (let index = 0; index < arrItem.length; index++) {
      if (arrItem[index].id === url.id) {
        videoContainer.innerHTML += createVideoTemplate(arrItem[index]);
      }
    }
  },

};

export default DetailBudaya;
