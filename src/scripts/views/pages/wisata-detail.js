/* eslint-disable no-plusplus */
import urlParser from '../../routes/url-parser';
import dataWisata from '../../data/Wisata.json';
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import { createWisataDetailTemplate, createOtherWisataPicturesTemplate } from '../template/detail-template';

const DetailWisata = {
  async render() {
    return `
          <section id="detail"></section>
          <section id="picture-detail"></section>
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
    const pictureContainer = document.querySelector('#picture-detail');

    for (let index = 0; index < arrItem.length; index++) {
      if (arrItem[index].id === url.id) {
        detailContainer.innerHTML += createWisataDetailTemplate(arrItem[index]);
        pictureContainer.innerHTML += createOtherWisataPicturesTemplate(arrItem[index]);

        // console.log(index.id);
      }
    }
  },

};

export default DetailWisata;
