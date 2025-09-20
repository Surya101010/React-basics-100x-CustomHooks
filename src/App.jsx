import { useEffect, useState } from 'react'
import { useFetch,useFetch1 } from './hooks/useFetch'
function App() {
  const post= useFetch1();
  const post1=useFetch("https://jsonplaceholder.typicode.com/posts/1")
  return (
    <><div>
      {post.title}
    </div>
    <div>{post1.body}</div>
    <>
    {JSON.stringify(post1)}
    </>
     </>
  )
}

export default App
