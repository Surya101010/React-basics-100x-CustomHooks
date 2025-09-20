import { useEffect, useState } from 'react'
function App() {
  const [post, setPost]= useState({});
  async function getposts(){
    const response =await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await response.json();
    setPost(json);
  }
  useEffect(()=>{
    getposts();
  },[])
  return (
    <>
    {post.title}
     </>
  )
}

export default App
