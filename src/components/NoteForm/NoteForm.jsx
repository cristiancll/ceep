import React, {Component} from "react";
import "./style.css";

class NoteForm extends Component{

    constructor(props) {
        super(props);
        this._title = "";
        this._text = "";
    }

    updateTitle(e){
        e.stopPropagation();
        this._title = e.target.value;
    }

    updateText(e){
        e.stopPropagation();
        this._text = e.target.value;
    }
    createNote(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.createNote(this._title, this._text);
    }

    render() {
        return(
            <form className="noteForm" onSubmit={this.createNote.bind(this)}>
                <input type="text" placeholder="Título" className="noteForm_input" onChange={this.updateTitle.bind(this)} />
                <textarea placeholder="Escreva sua nota..." className="noteForm_input" rows="15" onChange={this.updateText.bind(this)}/>
                <button type="submit" className="noteForm_input noteForm_submit">Criar Nota</button>
            </form>
        );
    }
}

export default NoteForm;
