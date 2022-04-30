const { fetchBreedDescription } = require('./breedFetcher');

// users run and provide the breed name to
// requires the breedFetcher file and call its exported function

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log('Breed description:', description);
  }

});