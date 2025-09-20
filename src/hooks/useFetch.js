import { useEffect, useState } from 'react'
export function useFetch1(){
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
export function useFetch(url){
    const[finalData ,setFinalData]= useState({});
    async function getposts(){
        const response =await fetch(url)
        const json = await response.json();
        setFinalData(json);
    }
  useEffect(()=>{
    getposts();
  },[])
  return finalData;
}