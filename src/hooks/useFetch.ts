import React from "react";
import { strict } from "assert";
import { useState ,useEffect} from "react";

export default function useFetch(url : string){
    const [data , setData ] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        });
    }, [url]);

    return data;
}