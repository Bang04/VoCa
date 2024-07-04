import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
export default function Day(){

    const  obj = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(obj.day)
    ))
    console.log(wordList);
    return(
        <>
        <h2 className="title is-4">Day {obj.day} </h2>
        <table className="table">
            <tbody>
                {wordList.map(word => (
                    <tr key={word.id}>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>{word.eng}</td>
                        <td>{word.kor}</td>
                        <td>
                            <button className="button">뜻보기</button>
                            <button className="button">삭제</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
    
}