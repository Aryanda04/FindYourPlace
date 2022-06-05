import data from "../../data/UMKM.json";
import { createBantenItemTemplate, createNiasItemTemplate, createBelitungItemTemplate} from "../template/umkm-template";

const UMKM = {
  async render() {
    return `
        <h2>UMKM EXPLORE</h2>
        <section id="banten-umkm"></section>
        <section id="nias-umkm"></section>
        <section id="belitung-umkm"></section>

      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    console.log(data);
    const umkmBanten = [];
    const umkmNias = [];
    const umkmBelitung = [];
    const umkmItem = [];
    const keys1 = Object.keys(dataBanten);
    const keys2 = Object.keys(dataNias);
    const keys3 = Object.keys(dataBelitung);

    keys1.forEach((key) => {
      // console.log(key);
      umkmBanten.push(...dataBanten[key]);
      umkmItem.push(...dataBanten[key]);
    });
    keys2.forEach((key) => {
      // console.log(key);
      umkmNias.push(...dataNias[key]);
      umkmItem.push(...dataNias[key]);
    });
    keys3.forEach((key) => {
      // console.log(key);
      umkmBelitung.push(...dataBelitung[key]);
      umkmItem.push(...dataBelitung[key]);
    });


    const bantenContainer = document.querySelector("#banten-umkm");
    const niasContainer = document.querySelector("#nias-umkm");
    const belitungContainer = document.querySelector("#belitung-umkm");


    umkmBanten.forEach((umkm) => {
      bantenContainer.innerHTML += createBantenItemTemplate(umkm);
    });
    umkmNias.forEach((umkm) => {
      niasContainer.innerHTML += createNiasItemTemplate(umkm);
    });
    umkmBelitung.forEach((umkm) => {
      belitungContainer.innerHTML += createBelitungItemTemplate(umkm);
    });
  },
};

export default UMKM;
