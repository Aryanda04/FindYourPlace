import data from "../../data/UMKM.json";
import { createUmkmItemTemplate } from "../template/umkm-template";
const UMKM = {
  async render() {
    return `
        <h2>UMKM EXPLORE</h2>
        <section id="explore-umkm"></section>

      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    console.log(data);
    const contUmkm = [];
    const keys = Object.keys(data);

    keys.forEach((key) => {
      // console.log(key);
      contUmkm.push(...data[key]);
      console.log(data[key]);
    });
    console.log(contUmkm);

    const listContainer = document.querySelector("#explore-umkm");

    contUmkm.forEach((umkmbanten) => {
      listContainer.innerHTML += createUmkmItemTemplate(umkmbanten);
    });
  },
};

export default UMKM;
