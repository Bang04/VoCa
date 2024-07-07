import React from "react";
import { useState } from "react"
import classes from "./Style.module.css"

interface IProps {
    word : any;
}

export interface IWord {
    day : string, 
    eng : string,
    kor : string,
    isDone : boolean,
    id : number
}


export default function Word({word : w} : IProps){


    
    const [word , setWord ] = useState(w);
    const [isShow , setIsShow] = useState(false);
    const [isDone , setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/josn',

            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            }),
        }).then(res => {
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if(window.confirm("정말 삭제하시겠습니다?")){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method: 'DELETE',
            }).then(res => {
                if(res.ok){
                  setWord({
                    ...word,
                    id : 0,
                });
                }
            })
        }
    }

    if(word.id === 0){
        return null;
    }
    return(
        <tr className={ isDone ? "has-background-grey-lighter" : ""}>
            <td>
                <input type="checkbox" checked = {word.isDone}
                    onChange={toggleDone}
                />
            </td>
            <td className={isDone ? " has-text-grey-light" : ""}>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow} className="button has-background-info-light has-text-info">뜻 { isShow ? "숨기기" : "보기" }</button>
                <button onClick={del} className="button  has-background-danger-light has-text-danger">삭제</button>
            </td>
        </tr>
    )
}