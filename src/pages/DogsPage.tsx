import { ListOfDogs } from "../components"
import '../styles/dogsPage.css'

export const DogsPage = () => {
  return (
    <section className="container">
      <h3>List Dogs</h3>
      <ListOfDogs />
    </section>
  )
}
