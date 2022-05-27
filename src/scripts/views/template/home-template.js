/* eslint-disable import/prefer-default-export */
// template untuk menampilkan resto item

const createRestoItemTemplate = (data) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${data.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" src="${data.picture}" class="lazyload card-image" alt="${data.name}"/>
          <span tabindex="0" class="card-rating">
            <span>${data.name}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
        <p class="card-content-rating">
        <i title="ratings" class="fa fa-star"></i>
          <span>${data.description}</span></p>
          <h1 class="card-content-title">${data.name}</h1>
          <p class="truncate">${data.description}</p>
        </div>
      </a>
    </div>
  `;

export { createRestoItemTemplate };
