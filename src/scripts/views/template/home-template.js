/* eslint-disable import/prefer-default-export */
// template untuk menampilkan resto item

const createBudayaItemTemplate = (data) => `
<div class="budaya-card">
    <img tabindex="0" src="${data.picture}" class="lazyload budaya-card-image" alt="${data.name}"/>
    <div class="budaya-card__content">
      <h2>${data.name}</h2>
      <a href="#/detail/${data.id}">Read More</a>
    </div>
  </div>
    
  `;

const createUMKMItemTemplate = (data) => `
<div class="umkm-card">
<img tabindex="0" src="${data.picture}" class="lazyload umkm-card-image" alt="${data.name}"/>
<div class="umkm-card__content">
  <h2>${data.name}</h2>
  <a href="#/detail/${data.id}">See Product</a>
</div>
</div>
  `;

const createWisataItemTemplate = (data) => `
<div class="wisata-card">
  <a class="wsata-card-a-tag" href="#/detail/${data.id}">
  <img tabindex="0" src="${data.picture}" class="lazyload wisata-card-image" alt="${data.name}"/>
  <div class="middle">
  <div class="wisata-text">${data.name}</div>
  </div>
  

  </a>
</div>
`;
export { createBudayaItemTemplate, createUMKMItemTemplate, createWisataItemTemplate };
