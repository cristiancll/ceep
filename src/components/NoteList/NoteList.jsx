import React, {Component} from "react";
import Note from "../Note";
import "./style.css";

class NoteList extends Component{

    render() {
        return(
            <ul className="noteList">
                { this.props.noteList.map((note, index) => {
                    return(
                        <li className="noteList_li" key={index}>
                            <Note title={note.title} text={note.text}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NoteList;
