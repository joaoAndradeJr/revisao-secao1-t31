export const createMovieCard = ({ title, subtitle, storyline, size, imagePath }) => {
  const section = document.createElement('section');
  section.className = 'planet';

  const titleH3 = document.createElement('h3');
  titleH3.className = 'planet-title';
  titleH3.innerText = title;
  section.appendChild(titleH3);

  const subtitleH4 = document.createElement('h4');
  subtitleH4.className = 'planet-subtitle';
  subtitleH4.innerText = subtitle;
  section.appendChild(subtitleH4);

  const image = document.createElement('img');
  image.className = 'planet-poster';
  image.src = imagePath;
  image.alt = `${title} planet poster`;
  section.appendChild(image);

  const storylineP = document.createElement('p');
  storylineP.className = 'planet-storyline';
  storylineP.innerText = storyline;
  section.appendChild(storylineP);

  const sizeP = document.createElement('p');
  sizeP.className = 'planet-rating';
  sizeP.innerText = `Tamanho: ${size}`;
  section.appendChild(sizeP);

  return section;
};
