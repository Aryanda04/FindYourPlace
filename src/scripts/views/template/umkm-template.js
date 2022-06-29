/* eslint-disable import/prefer-default-export */
const createUmkmItemTemplate = (conten) => `
    <div class="umkm" tabindex="0">
      <a href="#/detail-umkm/${conten.id}" class="umkm-link">
        <div class="img-umkm"> 
          <img tabindex="0" src="${conten.picture}" class="umkm_image" alt="${conten.name}"/>
        </div>

        <div class="umkm-desc" tabindex="0" >
          <h1 class="card-content-umkm">${conten.name}</h1>
          <p class="desc">${conten.description}</p>
        </div>
      </a>
    </div>
  `;

export { createUmkmItemTemplate };
