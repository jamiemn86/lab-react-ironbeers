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
          beerid: result._id,
        };
      });
      console.log(list);
      return list;
    });
};

export const loadBeer = (beerid) => {
  return axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${beerid}`)
    .then((response) => {
      const data = response.data;
      const beer = {
        id: data.id,
        name: data.name,
        image: data.image_url,
        contributor: data.contributed_by,
        tagline: data.tagline,
        firstbrewed: data.first_brewed,
        attlev: data.attenuation_level,
        description: data.description,
      };
      return beer;
    });
};
