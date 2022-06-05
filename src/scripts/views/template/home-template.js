/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
// template untuk menampilkan resto item
const createWisataHomeCardTemplate = (data) => `
<div class="wisata-card">
  <a class="wsata-card-a-tag" href="#/detail-wisata/${data.id}">
  <div class="wisata-location">
  <span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
  
  <p>${data.location}</p></span></div>
  <img tabindex="0" src="${data.picture}" class="lazyload wisata-card-image" alt="${data.name}"/>
  <div class="middle">
  <div class="wisata-text">${data.name}</div>
  </div>
  

  </a>
</div>
`;

const createBudayaHomeCardTemplate = (data) => `
<div class="budaya-card">
    <img tabindex="0" src="${data.picture}" class="lazyload budaya-card-image" alt="${data.name}"/>
    <div class="budaya-card__content">
      <h2>${data.name}</h2>
      <a href="#/detail-budaya/${data.id}">Read More</a>
    </div>
  </div>
    
  `;

const createUMKMHomeCardTemplate = (data) => `
<div class="umkm-card">
<img tabindex="0" src="${data.picture}" class="lazyload umkm-card-image" alt="${data.name}"/>
<div class="umkm-card__content">
  <h2>${data.name}</h2>
  <a href="#/detail-umkm/${data.id}">See Product</a>
</div>
</div>
  `;

const createOptionItemTemplate = (data) => `
<select id="selectLocation">
<option>Select Your Destination</option>
  ${data.map(
    (location) => `
    <option value="#/detail/${location}"><b>${location}</b></option>
    `,
  ).join('')}
</select>
`;

const createHomeScrollerTemplate = () => `
<div class="main-scroll-div">
      <div class="top-scroll-icon-container">
        <div class="scroll-icon-container">
          <button class="scroll-icon" id="btnl"><i class="fas fa-angle-double-left"></i></button>
        </div>
        <div class="scroll-icon-container-right-hidden">
        <button class="scroll-icon" id="btnr"><i class="fas fa-angle-double-right"></i></button>
        </div>
        </div>
          <div class="cover">
            <div class="scroll-images" id="budaya-section">
            </div>
          </div>
        <div class="scroll-icon-container-right">
        <button class="scroll-icon" id="btnr2"><i class="fas fa-angle-double-right"></i></button>
        </div>
      </div>
`;
export {
  createBudayaHomeCardTemplate, createUMKMHomeCardTemplate, createWisataHomeCardTemplate, createOptionItemTemplate, createHomeScrollerTemplate,
};
