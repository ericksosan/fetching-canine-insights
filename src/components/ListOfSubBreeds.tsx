import { SubBreedItem } from "./SubBreedItem"

export const ListOfSubBreeds: React.FC<{ subBreeds: string[] }> = ({ subBreeds }) => {
  return (
    <ul className="dog-breeds">
      {
        subBreeds.length > 0
          ? subBreeds.map((subBreed) => (<SubBreedItem key={subBreed} subBreed={subBreed} />))
          : <SubBreedItem subBreed='No sub breed' />
      }
    </ul>
  )
}
