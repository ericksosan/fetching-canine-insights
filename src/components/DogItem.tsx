import { serializeName } from "../utils"
import { ListOfSubBreeds } from "./ListOfSubBreeds"

export const DogItem: React.FC<Dog> = ({ breed, imageUrl, subBreeds }) => {
  return (
    <li className='dog'>
      <div className="image-container">
        <img src={imageUrl} alt={breed} width={200} height={200} />
        <ListOfSubBreeds subBreeds={subBreeds} />
      </div>
      <div className="dog-name">
        <p>{serializeName(breed)}</p>
      </div>
    </li>
  )
}
