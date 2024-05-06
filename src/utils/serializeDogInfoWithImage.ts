import { serializeName } from "./serializeName"

export const serializeDogInfoWithImage = (data: Dog[]) => {
  return data.map(({ breed, subBreeds }) => ({ uid: crypto.randomUUID(), dogName: serializeName(breed), subBreed: subBreeds.length > 0 ? subBreeds[0] : null }))
}
