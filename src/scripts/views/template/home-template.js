/* eslint-disable import/prefer-default-export */
// template untuk menampilkan resto item

const createBudayaItemTemplate = (data) => `
<div class="card">
    <img tabindex="0" src="${data.picture}" class="lazyload card-image" alt="${data.name}"/>
    <div class="card__content">
      <h2>${data.name}</h2>
      <a href="#">Read More</a>
    </div>
  </div>
    
  `;

export { createBudayaItemTemplate };
