import { useState,useEffect } from "react"
import { getRandomFact } from "../services/facts"


useState
export function useCatFact (){
    const [fact, setFact] = useState()
    const refreshRandomFact = () => {
        getRandomFact().then(setFact)
    }
    
    useEffect(refreshRandomFact, [])
    
    return {fact, refreshRandomFact}
}