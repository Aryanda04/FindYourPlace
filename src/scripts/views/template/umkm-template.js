/* eslint-disable import/prefer-default-export */
const createUmkmItemTemplate = (conten) => `
    <div class="umkm" tabindex="0">
      <a href="#/umkm/${conten.id}" class="umkm-link">
        <div class="img-umkm"> 
          <img tabindex="0" src="${conten.picture}" class="umkm_image" alt="${conten.name}"/>
        </div>

        <div class="umkm-desc" tabindex="0" >
          <span>${conten.description}</span></p>
          <h1 class="card-content-title">${conten.name}</h1>
          <p class="truncate">${conten.description}</p>
        </div>
      </a>
    </div>
  `;
const createBantenItemTemplate=(conten)=>`
<div class="umkm-banten" tabindex="0">
<img tabindex="0" src="${conten.picture}" class="umkm_image" alt="${conten.name}"/>
<div class="umkm-desc" tabindex="0" >
  <h1 class="card-content-title">${conten.name}</h1>
  <a href="#/umkm/${conten.id}" class="umkm-link">
</div>
</div>
  `;


export { createBantenItemTemplate };
