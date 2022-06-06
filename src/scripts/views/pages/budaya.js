import data from "../../data/Budaya.json";
import {createBudayaItemTemplate} from "../template/budaya-template"

const Budaya = {
  async render() {
    return `
        <h2>Budaya EXPLORE</h2>
        <section id="explore-budaya"></section>

      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const keys = Object.keys(data);
    const listContainer = document.querySelector('#explore-budaya');
    for (let k = 0; k < keys.length; k++) {
      data[keys[k]].forEach((belitung) => {
        listContainer.innerHTML += createBudayaItemTemplate(belitung);
      });
    }
  },
};

export default Budaya;
