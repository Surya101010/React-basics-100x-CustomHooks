import { useEffect, useState } from 'react'
export function useFetch(url){
    const[finalData ,setFinalData]= useState({});
    async function getposts(){
        const response =await fetch(url)
        const json = await response.json();
        setFinalData(json);
    }
  useEffect(()=>{
    getposts();
  },[url])
  return finalData;
}