/* eslint-disable no-plusplus */
/* eslint-disable no-empty-function */
import urlParser from '../../routes/url-parser';
import dataWisata from '../../data/Wisata.json';
import dataBudaya from '../../data/Budaya.json';
import dataUMKM from '../../data/UMKM.json';

const DetailLocation = {
  async render() {
    return `
    <h1> detail lokasi</h1>
      <section id="detail"></section>
    `;
  },
  async afterRender() {
    const url = urlParser.parseActiveUrlWithoutCombiner();
  },

};

export default DetailLocation;
