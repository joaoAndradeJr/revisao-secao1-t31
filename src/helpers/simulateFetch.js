import movies from './data';

const apiData = async (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://fakemoviedb.org/movies') {
        resolve({ results: movies });
      } else {
        reject(new Error('Falha ao obter os dados'));
      }
    }, 2000);
  });
};

export default apiData;
