interface Dog {
  breed: string,
  imageUrl: string,
  subBreeds: string[]
}

interface DogManagement {
  uid: string,
  dogName: string,
  subBreed: string | null
}

interface NewDog {
  dogName: string,
  subBreed: string
}