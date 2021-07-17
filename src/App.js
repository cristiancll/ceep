import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import {Component} from "react";
import "./assets/App.css"

class App extends Component {

    constructor() {
        super();
        this.state = {
            noteList: []
        };
    }
    createNote(title, text){
        this.setState({
            noteList: [...this.state.noteList, {title, text}]
        });
    }

    render(){
        return (
            <section className="content">
                <NoteForm createNote={this.createNote.bind(this)}/>
                <NoteList noteList={this.state.noteList}/>
            </section>
        );
    }
}

export default App;
