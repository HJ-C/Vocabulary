import { useState, useEffect } from "react"

export default function useFetch(url){
    const [data, setWords] = useState([])

	useEffect ( ()=> {
		fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setWords(data)
        })
   
	},[url])

    return data
}