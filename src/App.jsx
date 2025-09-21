import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev';
function App() {
  const [number,setNumber] = useState(1);
  // const post=useFetch("https://jsonplaceholder.typicode.com/posts/" +number )
  // const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/" +number );
  // if (loading){
  //   return <>
  //     Loading..
  //   </>
  // }
  // return (
  //   <>
  //   <button onClick={()=> setNumber(1)}>post 1</button>
  //   <button onClick={()=> setNumber(2)}>post 2</button>
  //   <button onClick={()=> setNumber(3)}>post 3</button>
  //   {JSON.stringify(finalData)}
  //    </>
  // )
  const[state,setState] =useState(0);
  const prev = usePrev(state);
  return(
  <>
  <p>
    {state}
  </p>
  <button onClick={()=>{
    setState((curr)=>curr+1)
  }}>Click me</button>
  <div>the previous value is {prev}</div>
  </>)
}

export default App
