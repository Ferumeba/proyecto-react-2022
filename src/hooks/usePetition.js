import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint) => {

  const API_URL = import.meta.env.VITE_API_URL

  const [data, setData] = useState()
  const [cargando, setCargando] = useState(false)

  console.log(`${API_URL}${endpoint}`)

  useEffect(() => {
    setCargando(true)

    axios.get(`${API_URL}${endpoint}`)
    .then(data => {
      setData(data.data.data)
      // console.log(data.data)
      setCargando(false)
    })
    .catch(e => {
      setCargando(false)
      console.error(e)
    })
  }, [])

  return [data, cargando]
}

export default usePetition;