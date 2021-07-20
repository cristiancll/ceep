import React, {Component} from 'react';
import "./style.css";
import {ReactComponent as DeleteSVG} from "../../assets/svg/delete.svg"

class Note extends Component {

    deleteNote(){
        this.props.deleteNote(this.props.index);
    }

    render() {
        return (
            <section className="note">
                <header className="note_header">
                    <h3 className="note_h3">{this.props.title}</h3>
                    <DeleteSVG onClick={this.deleteNote.bind(this)}/>
                    <h4 className="note_h3">{this.props.category}</h4>
                </header>
                <p className="note_p">
                    {this.props.text}
                </p>
            </section>
        );
    }
}

export default Note;
