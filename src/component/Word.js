import { useState } from "react"

export default function Word({word}){

    const [isShow , setIsShow] = useState(false);

    function toggleShow(){
        setIsShow(!isShow);
    }


    return(
        <tr className={word.isDone ? "" : ""}>
            <td>
                <input type="checkbox" checked = {word.isDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow} className="button">뜻 { isShow ? "숨기기" : "보기" }</button>
                <button className="button">삭제</button>
            </td>
        </tr>
    )
}