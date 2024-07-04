import { Link } from "react-router-dom"
import 'bulma/css/bulma.css'

export default function Headers(){
    return(
        <div className="fixed-grid has-2-cols">
            <div class="grid">
                <div class="cell">
                    <Link to="/" className="title">토익 영단어(고급)</Link>
                </div>
                <div class="cell">
                    <Link to="#x" className="button is-link is-light"> 
                        단어추가
                    </Link>
                    <Link to="#x" className="button is-link is-light"> 
                        Day 추가
                    </Link>
                </div>
            </div>
        </div>
    )
}