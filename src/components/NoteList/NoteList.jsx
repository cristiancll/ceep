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
                            <Note index={index} title={note.title} text={note.text} category={note.category} deleteNote={this.props.deleteNote}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NoteList;
