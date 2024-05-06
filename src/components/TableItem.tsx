import { memo, useEffect, useState } from "react"
import { serializeName } from "../utils"
import { useForm } from "../hooks/useForm"

interface TableItemProps extends DogManagement {
  handleActiveDog: (data: DogManagement) => void
  activeDog: DogManagement | null
  handleSaveNewDog: () => void
  handleDelete: (uid: string) => void
}

export const TableItem: React.FC<TableItemProps> = memo(({
  activeDog,
  uid,
  dogName,
  subBreed,
  handleActiveDog,
  handleSaveNewDog,
  handleDelete
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const { formInput, onInputChange } = useForm<DogManagement>(activeDog as DogManagement)

  useEffect(() => {
    handleActiveDog({ ...activeDog, ...formInput })
  }, [formInput])

  const handleEdit = () => {
    setIsEditing(!isEditing)
    handleActiveDog({ dogName, uid, subBreed })
  }

  return (
    <tr>
      <td>
        <div className="input-table-container">
          {
            (activeDog?.uid === uid && isEditing)
              ? <input
                type="text"
                name="dogName"
                value={activeDog.dogName}
                onChange={onInputChange}
                placeholder="Dog's name"
              />
              : serializeName(dogName)
          }
        </div>
      </td>
      <td>
        {
          (activeDog?.uid === uid && isEditing)
            ? <input
              type="text"
              name="subBreed"
              value={activeDog.subBreed ?? ''}
              onChange={onInputChange}
              placeholder="Dog's subbreed"
            />
            : subBreed
        }
      </td>
      <td>
        {
          (activeDog?.uid === uid && isEditing)
            ? <button onClick={handleSaveNewDog} className="btn-save">Save</button>
            : <button onClick={handleEdit}>Edit</button>
        }
        <button onClick={() => handleDelete(uid)}>Delete</button>
      </td>
    </tr>
  )
})
