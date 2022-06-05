/* eslint-disable import/prefer-default-export */
const createBantenItemTemplate=(conten)=>`
<div class="umkm-banten" tabindex="0">
<img tabindex="0" src="${conten.picture}" class="umkm banten_image" alt="${conten.name}"/>
<div class="banten-desc" tabindex="0" >
  <h1 class="card-content-title">${conten.name}</h1>
  <a href="#/umkm-banten/${conten.id}"></a>
</div>
</div>
  `;
const createNiasItemTemplate=(conten)=>`
<div class="umkm-nias" tabindex="0">
  <img tabindex="0" src="${conten.picture}" class="umkm nias_image" alt="${conten.name}"/>
  <div class="nias-desc" tabindex="0" >
    <h1 class="card-content-title">${conten.name}</h1>
    <a href="#/umkm-nias/${conten.id}"></a>
  </div>
</div>
 `;
const createBelitungItemTemplate=(conten)=>`
<div class="umkm-belitung" tabindex="0">
  <img tabindex="0" src="${conten.picture}" class="umkm belitung_image" alt="${conten.name}"/>
  <div class="belitung-desc" tabindex="0" >
    <h1 class="card-content-title">${conten.name}</h1>
    <a href="#/umkm-nias/${conten.id}"></a>
  </div>
</div>
  `;

export { createBantenItemTemplate, createNiasItemTemplate, createBelitungItemTemplate };
