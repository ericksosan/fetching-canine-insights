import { toast } from "sonner"
import { useForm } from "../hooks/useForm"

interface FormManagementProps {
  handleUpdateDog: (data: NewDog) => void
}

const initialState: NewDog = {
  dogName: '',
  subBreed: ''
}

export const FormManagement: React.FC<FormManagementProps> = ({ handleUpdateDog }) => {
  const { formInput, onInputChange, onResetForm } = useForm<NewDog>(initialState)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formInput.dogName.length < 1 || formInput.subBreed.length < 1) return toast.error('Some fields are invalid')

    handleUpdateDog(formInput)

    toast.success('New dog successfully added')
    onResetForm()
  }

  return (
    <form className="responsive-form" onSubmit={onSubmit}>
      <input
        type="text"
        name='dogName'
        value={formInput.dogName}
        onChange={onInputChange}
        placeholder="Add your dog's name" />
      <input
        type="text"
        name='subBreed'
        value={formInput.subBreed}
        onChange={onInputChange}
        placeholder="Add the sub breed of your dog" />
      <button>Add Dog</button>
    </form>
  )
}
