import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch.ts";
import { IDay } from "./DayList";

export default function CreateWord(){
    const days : IDay[] = useFetch(`http://localhost:3001/days`)
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    function onSubmit(e : React.FormEvent){
        e.preventDefault();

        if(!isLoading && engRef.current && korRef.current && dayRef.current){
            setIsLoading(true);

           const eng = engRef.current.value;
           const kor = korRef.current.value;
           const day = dayRef.current.value;

            fetch(`http://localhost:3001/words`,{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/josn',
                },
                body : JSON.stringify({
                    eng ,
                    kor ,
                    day ,
                    isDone : false , 
                }),
            }).then(res => {
                if(res.ok){
                    alert("등록 완료되었습니다.");
                    navigate(`/day/${day}`); 
                    setIsLoading(true);
                }
            });
        }
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);
    
    return(
        <div className="section">
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">Eng</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" ref={engRef}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Kor</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" ref={korRef}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Day</label>
                    <div className="control select">
                        <select ref={dayRef}>
                            {days.map(day =>(
                                 <option key= {day.id} value={day.day}>{day.day}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className={isLoading ? "button has-background-info-light" : "button " }>{isLoading ? "Saving..." : "등록"}</button>
            </form>
        </div>
      
    )
}