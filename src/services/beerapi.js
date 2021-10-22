import axios from 'axios';

export const listAllBeers = () => {
  return axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      const data = response.data;
      console.log(response.data);
      const list = data.map((result, index) => {
        return {
          name: result.name,
          image: result.image_url,
          tagline: result.tagline,
          contributor: result.contributed_by,
          id: index + 1,
        };
      });
      return list;
    });
};
