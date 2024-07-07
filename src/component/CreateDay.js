import React, {useRef} from "react";
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function CreateDay(){
    const days = useFetch(`http://localhost:3001/days`)
    const navigate = useNavigate();

    function addDay(e){
        e.preventDefault();

        fetch(`http://localhost:3001/days`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/josn',
            },
            body : JSON.stringify({
              
                day : days.length +1 ,
            }),
        }).then(res => {
            if(res.ok){
                alert("등록 완료되었습니다.");
                navigate(`/`); 
                
            }
        });

    }

    return(
        <div className="section">
            <div className="field">
                <label className="label">현재 일수</label>
                <div className="control">
                    {days.length}
                </div>
            </div>
            <button className="button" onClick={addDay}>등록</button>
        </div>
      
    )
}