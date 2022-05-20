import { useState, useEffect } from "react"

export const useFetch = (url) => {

  const [data,setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  console.log(data)

  useEffect(() => {
    
    const fetchData = async () => {
      setIsLoaded(true)
      try {
        const res = await fetch(url)
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const json = await res.json()
        setIsLoaded(false)
        setData(json)
        setError(null)
        } catch (err) {
            setIsLoaded(false)
            setError('Error : Could not display data :(')
            console.log(err.message)
          }
        }    

      fetchData()
  },[url])

  return { data, isLoaded, error}
}

