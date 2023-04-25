import movies from './data';

const fakeAPI = async (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => (
      url === 'https://fakemoviedb.org/movies'
        ? (
            resolve({
              json: () => Promise.resolve({ results: movies })})
          )
        : reject(new Error('Falha ao obter os dados'))
    ), 2000);
  });
};

export default fakeAPI;
