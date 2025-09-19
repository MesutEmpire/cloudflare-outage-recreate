import {useEffect, useState} from 'react'
import './App.css'

function App() {
const params:{get:number} = {get : 100};
const [success,setSuccess] = useState<boolean>(false);
const [result,setResult] = useState<{
        message: string,
        requestCount: number,
        time: Date
    }>()

const fetchData = async () => {
    try {
        const data = await fetch('http://localhost:3000')
        const json = await data.json();
        setSuccess(true)
        setResult(json)
        return json;
    }catch (e) {
        console.error(e)
        setSuccess(false);
    }
}

// Fails / unexpected behavior
//     useEffect(() => {
//         fetchData().then();
//     }, [params]); // params is an object → new reference on each render → effect runs every render


// Works fine
    useEffect(() => {
        fetchData().then();
    }, [params.get]);  // params.get is a primitive (number/string)

  return (
    <div>
        {success && <div>
        <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>}
    </div>
  )
}

export default App
