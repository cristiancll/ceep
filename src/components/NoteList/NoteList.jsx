import React, {Component} from "react";
import Note from "../Note";
import "./style.css";

class NoteList extends Component{

    constructor(props) {
        super(props);
        this.newNoteHook = this.newNote.bind(this);
        this.state = {notes: []};
    }
    
    

    componentDidMount() {
        this.props.notes.hook(this.newNoteHook);
    }
    componentWillUnmount() {
        this.props.notes.unhook(this.newNoteHook);
    }

    newNote(notes){
        this.setState({...this.state, notes});
    }

    render() {
        return(
            <ul className="noteList">
                { this.state.notes.map((note, index) => {
                    return(
                        <li className="noteList_li" key={index}>
                            <Note 
                                index={index} 
                                title={note.title} 
                                text={note.text} 
                                category={note.category} 
                                deleteNote={this.props.notes.deleteNote.bind(this.props.notes)}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default NoteList;
