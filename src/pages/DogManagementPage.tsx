import { useEffect, useMemo, useState } from "react"
import { FormManagement, TableItem } from "../components"
import { useSortableData, useDogData, useForm } from "../hooks"
import { serializeDogInfoWithImage } from "../utils"
import '../styles/dogManagementPage.css'

const initialStateSearch = {
  search: ''
}

export const DogManagementPage = () => {
  const { formInput: searchFormInput, onInputChange: searchOnInputChange } = useForm<{ search: string }>(initialStateSearch)
  const [dogs, setDogs] = useState<DogManagement[]>(JSON.parse(localStorage.getItem('dogs') || '[]') ?? [])
  const [activeDog, setActiveDog] = useState<DogManagement | null>(null)
  const { items, requestSort } = useSortableData(dogs)
  const { data } = useDogData()

  useEffect(() => {
    setDogs(serializeDogInfoWithImage(data))
  }, [data])

  useEffect(() => {
    localStorage.setItem('dogs', JSON.stringify(dogs))
  }, [dogs])

  const handleActiveDog = (dog: DogManagement | null) => {
    setActiveDog(dog)
  }

  const handleSaveNewDog = () => {
    setDogs(
      dogs.map((item) => item.uid === activeDog?.uid ? { ...item, ...activeDog } : item)
    )
    setActiveDog(null)
  }

  const handleDelete = (uid: string) => {
    setDogs(dogs.filter((item) => item.uid !== uid))
    setActiveDog(null)
  }

  const handleUpdateDog = (data: NewDog) => {
    setDogs((prev) => [{ ...data, uid: crypto.randomUUID() }, ...prev])
  }

  const findDogs = useMemo(() => {
    return searchFormInput.search.length > 0
      ? items.filter((dog) => dog.dogName.toLowerCase().includes(searchFormInput.search.toLowerCase()))
      : items
  }, [searchFormInput.search, items])

  return (
    <section className="container">
      <h3>Dog Management</h3>

      <FormManagement handleUpdateDog={handleUpdateDog} />

      <div className="search">
        <input type="text" placeholder="Search..." name="search" value={searchFormInput.search.trimStart()} onChange={searchOnInputChange} />
      </div>

      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('dogName')}>
              <div className="header_sort">
                <span>Dog Name</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 9l4 -4l4 4m-4 -4v14" />
                  <path d="M21 15l-4 4l-4 -4m4 4v-14" />
                </svg>
              </div>
            </th>
            <th onClick={() => requestSort('subBreed')}>
              <div className="header_sort">
                <span>Dog Sub-breed</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 9l4 -4l4 4m-4 -4v14" />
                  <path d="M21 15l-4 4l-4 -4m4 4v-14" />
                </svg>
              </div></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            findDogs.map((data) => (
              <TableItem
                key={data.uid}
                {...data}
                activeDog={activeDog}
                handleDelete={handleDelete}
                handleActiveDog={handleActiveDog}
                handleSaveNewDog={handleSaveNewDog} />
            ))
          }
        </tbody>
      </table>

    </section>
  )
}
