console.log('***** Music Collection *****')

const collection = [];

function addToCollection(title, artist, yearPublished) {
  const album = {album:title, artist, yearPublished}
  collection.push(title, artist, yearPublished);
  console.log(` ${title} was added to collection`);
  return collection
}

addToCollection ('Meteora', 'Linkin Park', '2003')
addToCollection ('How to Save a Life', 'The Fray','2005')
