console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
  const album = {album:title, artist, yearPublished}
  collection.push(title, artist, yearPublished);
  console.log(` ${title} was added to collection`);
  return collection
}

addToCollection ('Meteora', 'Linkin Park', '2003')

addToCollection ('Hybrid Theory','Linkin Park','2000')
addToCollection ('How to Save a Life', 'The Fray','2005')
addToCollection ('Kane Brown', 'Kane Brown', '2016')
addToCollection ('Ticket to L.A.','Brett Young','2018')
addToCollection ('Metallica','Metallica','1991')
addToCollection ('Spider-Man:Into the Spider-verse OST','Various Artist','2018')

console.log(collection);

function showCollection(){
  
}
