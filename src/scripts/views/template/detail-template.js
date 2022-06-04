/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */

const createWisataDetailTemplate = (data) => `
<div class="detail-container">
    <div class="detail-container-left">
        <img tabindex="0" src="${data.picture}" class="lazyload detail-image" alt="${data.name}"/>
    </div>
    <div class="detail-container-right">
        <h2>${data.name}</h2>
        <span>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
        <h5>${data.location}</h5>
        </span>
        <br>
        <br>
        <p>${data.description}</p>
        <h4> Distance : ${data.distance} km</h4>
        <a href="${data.maps}" target="_blank">see on maps</a>

        <h4> Facility : </h4>
        <ol>${data.facility
    .map(
      (category) => `
                  <span class="facility">${category}</span>
                `,
    )
    .join('')}
            </ol>
    </div>
</div>

`;

const createOtherWisataPicturesTemplate = (data) => `
<h1> ${data.name} </h1>
<div class="picture-detail-container">
    ${data.pictures_url
    .map(
      (i) => `
      <div class="other-pictures">
        <img src="${i}" />
        </div>
        `,
    )
    .join('')}
</div>
`;

const createUMKMDetailTemplate = (data) => `
<div class="detail-container">
<div class="detail-container-left">
    <img tabindex="0" src="${data.picture}" class="lazyload detail-image" alt="${data.name}"/>
</div>
<div class="detail-container-right">
    <h2>${data.name}</h2>
    <span>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
    <h5>${data.location}</h5>
    </span>
    <br>
    <br>
    <p>${data.description}</p>
    <br>
    <span>
    <a href="${data.maps}" target="_blank">see on maps</a>
    <a href="${data.link}" target="_blank">social media</a>

    </span>

</div>
</div>
<div class="filler"></div>
`;
const createBudayaDetailTemplate = (data) => `
<div class="detail-container">
<div class="detail-container-left">
    <img tabindex="0" src="${data.picture}" class="lazyload detail-image" alt="${data.name}"/>
</div>
<div class="detail-container-right">
    <h2>${data.name}</h2>
    <span>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
    <h5>${data.location}</h5>
    </span>
    <br>
    <br>
    <p>${data.description}</p>
    <br>
    <span>
    <a href="${data.video}" target="_blank">see video</a>

    </span>

</div>
</div>
<div class="filler"></div>
`;

export {
  createWisataDetailTemplate, createOtherWisataPicturesTemplate, createUMKMDetailTemplate, createBudayaDetailTemplate,
};
