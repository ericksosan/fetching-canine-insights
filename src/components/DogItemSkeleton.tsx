import '../styles/dogsPage.css'

export const DogItemSkeleton = () => {
  return (
    <li className='dog'>
      <div className="image-container image-dog-skeleton" />
      <div className="dog-name dog-name-skeleton">
        <p>name of dog</p>
      </div>
    </li>
  )
}
