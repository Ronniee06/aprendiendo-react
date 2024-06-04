import { useEffect, useState } from "react"



export function useCatImage({ fact }) {

    const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {

        if (!fact) return
        //para una sola palabra
        const firstWord = fact.split(' ')[0]
        console.log(firstWord)

        //agarramos las palabras de las posiciones que queramos
        //con el slice lo que hacemos es que los va guardando en un array cada vez que detecta espacio
        //el join junta las palabras separadas por un espacio
        const anyWord1 = fact.split(' ').slice(0, 3).join(' ')
        console.log(anyWord1)

        //otra forma pero solo con el split
        //hace la misma funcion que slice pero directamente con el split
        const anyWord2 = fact.split(' ', 3).join(' ')
        console.log(anyWord2)
        //https://cataas.com/cat/says/hello?fontSize=50&fontColor=red
        fetch(`https://cataas.com/cat/says/${anyWord2}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { _id } = response
                setImageUrl(`${CAT_PREFIX_IMAGE_URL}/cat/${_id}/says/${anyWord1}`)
            })
    }, [fact])

    return { imageUrl }
}