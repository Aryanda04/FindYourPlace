/* eslint-disable import/prefer-default-export */
// template untuk menampilkan resto item

const createRestoItemTemplate = (data) => `
    <div tabindex="0" class="card">
      <a href="#/resto/${data.id}" class="card-a-tag">
        <div class="img-container">
          <img tabindex="0" class="lazyload card-image" alt="${data.name}" src="icons/fys-1.png" data-src=""/>
          <span tabindex="0" class="card-rating">
            <span>${data.city}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
        <p class="card-content-rating">
        <i title="ratings" class="fa fa-star"></i>
          <span>${data.rating}</span></p>
          <h1 class="card-content-title">${data.name}</h1>
          <p class="truncate">${data.description}</p>
        </div>
      </a>
    </div>
  `;

export { createRestoItemTemplate };
