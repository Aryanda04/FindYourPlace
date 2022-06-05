const createBudayaItemTemplate = (content) => `
    <div tabindex="0" class="card">
      <a href="#/budaya/${content.id}" class="budaya-link">
        <div class="img-budaya">
          <img tabindex="0" src="${content.picture}" class="budaya_image" alt="${content.name}"/>
        </div>

        <div tabindex="0" class="budaya-desc">
          <span>${content.descripton}</span></p>
          <h1 class="card-content-title">${content.name}</h1>
          <p class="truncate">${content.description}</p>
        </div>
      <a>
    <div>
    `;

export { createBudayaItemTemplate };
