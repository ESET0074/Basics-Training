import { useState} from "react"

const useFetch=(url)=>{
    const [loading, setLoading] = useState(false)
    const [error, setError]= useState(null)
    const [data,setData]=useState(null)

    const getData = async() =>{
        try{
            
            const response = await axios.get(url)
            setData(response.data)
        }catch(error){
              setError(error)
        }finally{
           setLoading(false)
        }
    }
    
    useEffect(()=>{}, []);
    return[loading, data, error]
}