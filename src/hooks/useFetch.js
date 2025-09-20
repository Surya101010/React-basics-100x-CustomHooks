import { useEffect, useState } from 'react'
export function useFetch(){
    const [post, setPost]= useState({});
  async function getposts(){
    const response =await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await response.json();
    setPost(json);
  }
  useEffect(()=>{
    getposts();
  },[])
  return post;
}