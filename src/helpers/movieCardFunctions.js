export const createMovieCard = ({ title, subtitle, storyline, rating, imagePath }) => {
  const section = document.createElement('section');
  section.className = 'movie';

  const titleH3 = document.createElement('h3');
  titleH3.className = 'movie-title';
  titleH3.innerText = title;
  section.appendChild(titleH3);

  const subtitleH4 = document.createElement('h4');
  subtitleH4.className = 'movie-subtitle';
  subtitleH4.innerText = subtitle;
  section.appendChild(subtitleH4);

  const image = document.createElement('img');
  console.log(imagePath)
  image.className = 'movie-poster';
  image.src = imagePath;
  image.alt = `${title} movie poster`;
  section.appendChild(image);

  const storylineP = document.createElement('p');
  storylineP.className = 'movie-storyline';
  storylineP.innerText = storyline;
  section.appendChild(storylineP);

  const ratingP = document.createElement('p');
  ratingP.className = 'movie-rating';
  ratingP.innerText = `Rating: ${rating}`;
  section.appendChild(ratingP);

  return section;
};
