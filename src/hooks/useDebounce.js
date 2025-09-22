import { useRef } from "react";

export function useDebounce(originalfn){
    const currentClock = useRef();
    const fn = ()=>{
        clearTimeout(currentClock.current);
        currentClock.current=setTimeout(originalfn,200);
    }
    return fn;
}