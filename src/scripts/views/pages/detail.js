import urlParser from '../../routes/url-parser';
import dataWisata from '../../data/Wisata.json';
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';
import { createBudayaItemTemplate, createUMKMItemTemplate, createWisataItemTemplate } from '../template/home-template';

const Detail = {
  async render() {
    return `
          <h2>Detail Pages</h2>
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
    console.log(arrItem);
    console.log(url.id);
    const detailContainer = document.querySelector('#detail');
    // arrItem.some((value, index) => {
    //   if (value.id === url.id) {
    //     return value.id;
    //   }
    // });
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < arrItem.length; index++) {
      if (arrItem[index].id === url.id) {
        detailContainer.innerHTML += createWisataItemTemplate(arrItem[index]);
        console.log(index.id);
      }
    }

    // arrItem.forEach((url.id) => {
    //   detailContainer.innerHTML += createBudayaItemTemplate(url.id);    });
  },

};

export default Detail;
