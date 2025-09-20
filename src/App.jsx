import { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'
function App() {
  const post= useFetch();
  return (
    <>
    {post.title}
     </>
  )
}

export default App
