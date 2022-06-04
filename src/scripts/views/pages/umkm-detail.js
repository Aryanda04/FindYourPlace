/* eslint-disable no-plusplus */
/* eslint-disable no-empty-function */
import urlParser from '../../routes/url-parser';
import dataWisata from '../../data/Wisata.json';
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import { createUMKMDetailTemplate } from '../template/detail-template';

const DetailUMKM = {
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
    // console.log(arrItem);

    const detailContainer = document.querySelector('#detail');

    for (let index = 0; index < arrItem.length; index++) {
      if (arrItem[index].id === url.id) {
        detailContainer.innerHTML += createUMKMDetailTemplate(arrItem[index]);
        // console.log(index.id);
      }
    }
  },

};

export default DetailUMKM;
