import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'
function App() {
  const [number,setNumber] = useState(1);
  // const post=useFetch("https://jsonplaceholder.typicode.com/posts/" +number )
  const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/" +number );
  if (loading){
    return <>
      Loading..
    </>
  }
  return (
    <>
    <button onClick={()=> setNumber(1)}>post 1</button>
    <button onClick={()=> setNumber(2)}>post 2</button>
    <button onClick={()=> setNumber(3)}>post 3</button>
    {JSON.stringify(finalData)}
     </>
  )
}

export default App
