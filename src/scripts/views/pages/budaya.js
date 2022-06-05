import data from "../../data/Budaya.json";
import {createBudayaItemTemplate} from "../template/budaya-template"

const Budaya = {
  async render() {
    return `
    <custom-jumbotron></custom-jumbotron>
        <h2>Budaya EXPLORE</h2>
        <section id="explore-budaya"></section>

      `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    console.log(data);
    const contBudaya = [];
    const keys = Object.keys(data);

    keys.forEach((key) => {
      // console.log(key);
      contBudaya.push(...data[key]);
      console.log(data[key]);
    });
    console.log(contBudaya);

    const listContainer = document.querySelector("#explore-budaya");

    contBudaya.forEach((budayabanten) => {
      listContainer.innerHTML += createBudayaItemTemplate(budayabanten);
    });
  },
};

export default Budaya;
