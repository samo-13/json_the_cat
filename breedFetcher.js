const request = require('request'); // require the request library
  
// Printing process.argv property value
let catBreed = process.argv;
catBreed = catBreed.slice(2); // gets the command line arguments and ignores initial items
catBreed = catBreed[0];

// The endpoint to allow us to search breed information is:
// https://api.thecatapi.com/v1/breeds/search --> returns []

// https://api.thecatapi.com/v1/breeds/search?q=sib
// --> returns
// [{"weight":{"imperial":"8 - 16","metric":"4 - 7"},"id":"sibe","name":"Siberian","cfa_url":"http://cfa.org/Breeds/BreedsSthruT/Siberian.aspx","vetstreet_url":"http://www.vetstreet.com/cats/siberian","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/siberian","temperament":"Curious, Intelligent, Loyal, Sweet, Agile, Playful, Affectionate","origin":"Russia","country_codes":"RU","country_code":"RU","description":"The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ","life_span":"12 - 15","indoor":0,"lap":1,"alt_names":"Moscow Semi-longhair, HairSiberian Forest Cat","adaptability":5,"affection_level":5,"child_friendly":4,"dog_friendly":5,"energy_level":5,"grooming":2,"health_issues":2,"intelligence":5,"shedding_level":3,"social_needs":4,"stranger_friendly":3,"vocalisation":1,"experimental":0,"hairless":0,"natural":1,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Siberian_(cat)","hypoallergenic":1,"reference_image_id":"3bkZAjRh1"}]

// GET
// /breeds/search
// Search for a Breed by using part of it’s name as the ‘q’ query parameter.
// e.g ?q=sib to search for Siberian
request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  // keep above data declaration
  if (error !== null) {
    console.log('Error details:', error);
  }

  // use JSON.parse to convert the JSON string into an actual object
  // data declaration
  const data = JSON.parse(body);

  // keep below data declaration
  if (data.length === 0) {
    let noResults = 'No results found';
    console.log(noResults);
    return;
  }

  // access the first entry in the data array and print out the description for the user
  // keep below if statements
  let description = console.log(`Dog name search: ${catBreed} \n Dog description: ${data[0].description}`);
  return description;
});