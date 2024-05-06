import { useDogData } from "../hooks/useDogData"
import { DogItem, DogItemSkeleton, ErrorGetDogs } from "./"

export const ListOfDogs = () => {
  const { data: dogs, isError, isLoading } = useDogData()

  if (isError) return <ErrorGetDogs />

  return (
    <ul className="list_dogs">
      {
        isLoading
          ? Array(25).fill('').map((_, index) => (<DogItemSkeleton key={index} />))
          : dogs.map((dog, index) => (<DogItem key={index} {...dog} />))
      }
    </ul>
  )
}
