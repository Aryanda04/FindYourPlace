import { createBudayaItemTemplate } from "../template/budaya-template";

const Budaya = {
  async render() {
    return `
    <custom-jumbotron></custom-jumbotron>
      
    `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    console.log(data);
    const listContainer = document.querySelector("#explore-budaya")

    data.banten.array.forEach(budayabanten => {
      listContainer.innerHTML += createBudayaItemTemplate(budayabanten);
    });
  },
};

export default Budaya;
