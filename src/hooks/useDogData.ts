import { useEffect, useState } from "react"
import { getDogInfo } from "../utils"
import { toast } from "sonner"
const API_URL = 'https://dog.ceo/api'

interface UseDogData {
  data: Dog[],
  isLoading: boolean
  isError: boolean
}

export const useDogData = (): UseDogData => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const breedsResponse = await fetch(`${API_URL}/breeds/list/all`)
        const breedsData = await breedsResponse.json()

        const imagesResponse = await fetch(`${API_URL}/breeds/image/random/50`)
        const imagesData = await imagesResponse.json()

        setData(imagesData.message.map((url: string) => getDogInfo(url, breedsData.message)))
        setIsLoading(false)
      } catch (error) {
        setIsError(true)
        setIsLoading(false)
        toast.error(error as string)
      }
    }

    fetchDogData()
  }, [])

  return { data, isLoading, isError }
};