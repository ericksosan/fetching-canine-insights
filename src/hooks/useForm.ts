import { useState } from 'react'

type UseFormType<T> = {
	formInput: T
	onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	onResetForm: () => void
}

export const useForm = <T>(initialValue: T = {} as T): UseFormType<T> => {
	const [formInput, setFormInput] = useState<T>(initialValue)

	const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target

		setFormInput({
			...formInput,
			[name]: value,
		})
	}

	const onResetForm = () => {
		setFormInput(initialValue)
	}

	return {
		formInput,
		onInputChange,
		onResetForm,
	}
}
