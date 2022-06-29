const createWisataItemTemplate = (content) => `
    <div class="card-wisata" tabindex="0">
      <a href="#/detail-wisata/${content.id}" class="wisata-link">
        <div class="img-wisata">
        
          <img tabindex="0" src="${content.picture}" class="wisata_image" alt="${content.name}"/>
        </div>

        <div class="wisata-desc" tabindex="0">
          <h1 class="card-content-title-wisata">${content.name}</h1>
          <p class="description-wisata truncate-wisata">${content.description}</p>
        </div>
      <a>
    <div> 
    `;
// eslint-disable-next-line import/prefer-default-export
export { createWisataItemTemplate };
