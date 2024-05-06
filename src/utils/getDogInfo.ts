export const getDogInfo = (url: string, allBreeds: { [key: string]: string[] }) => {
  const urlSegments = url.split('/');
  const breedsIndex = urlSegments.indexOf('breeds');
  const breed = urlSegments[breedsIndex + 1];

  const listSubbreeds = allBreeds[breed.split('-')[0]]
  const subBreeds = listSubbreeds.length > 3 ? [...listSubbreeds.slice(0, 3), '...'] : listSubbreeds

  return {
    breed,
    imageUrl: url,
    subBreeds
  };
};