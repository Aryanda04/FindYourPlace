const createBudayaItemTemplate = (content) => `
    <div tabindex="0" class="card-budaya">
      <a href="#/budaya/${content.id}" class="budaya-link">
        <div class="img-budaya">
          <img tabindex="0" src="${content.picture}" class="budaya_image" alt="${content.name}"/>
        </div>

        <div tabindex="0" class="budaya-desc">
          <h1 class="card-content-budaya">${content.name}</h1>
          <p class="desc-budaya">${content.description}</p>
        </div>
      <a>
    <div>
    `;

const createBantenItemTemplate = (content) => `
<tabindex="0" div class="budaya-banten">
<img tabindex="0" src="${content.picture}" class="budaya_image" alt="${content.name}"/>
<div class="budaya-desc" tabindex="0" >
  <h1 class="card-content-budaya">${content.name}</h1>
  <a href="#/budaya/${content.id}" class="budaya-link">
</div>
</div>
  `;
export { createBudayaItemTemplate, createBantenItemTemplate};
