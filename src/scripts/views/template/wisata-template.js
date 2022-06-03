const createWisataItemTemplate = (content) => `
    <div class="wisata" tabindex=0>
      <a href="#/wisata/${content.id}" class="wisata-link">
        <div class="img-wisata">
          <img tabindex="0" src="${content.picture}" class="wisata_image" alt="${content.name}"/>
        </div>

        <div class="umkm-desc" tabindex="0">
          <span>${content.descripton}</span></p>
          <h1 class="card-content-title">${content.name}</h1>
          <p class="truncate">${content.description}</p>
        </div>
      <a>
    <div>
    `;

export { createWisataItemTemplate };
