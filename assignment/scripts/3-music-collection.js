console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
  const album = {title:title, artist:artist, yearPublished:yearPublished}
  collection.push(album);
  return album
}

addToCollection ('Meteora', 'Linkin Park', '2003')

addToCollection ('Hybrid Theory','Linkin Park','2000')
addToCollection ('How to Save a Life', 'The Fray','2005')
addToCollection ('Kane Brown', 'Kane Brown', '2016')
addToCollection ('Ticket to L.A.','Brett Young','2018')
addToCollection ('Metallica','Metallica','1991')
addToCollection ('Spider-Man:Into the Spider-verse OST','Various Artist','2018')

console.log(collection);

function showCollection(array){
  console.log(collection.length);
  for (let i = 0; i < collection.length; i++) {
      console.log(collection[i].title, 'by', collection[i].artist, collection[i].yearPublished);
  }
}

showCollection(collection);

function findByArtist(artist){
  let searchResults =[];
  for (let i = 0; i < collection.length; i++){
    if ( artist === collection[i].artist){
      searchResults.push(collection[i]);
    }
  }
  return searchResults;
}

console.log(findByArtist('The Fray'));
console.log(findByArtist('Bruno Mars'));
