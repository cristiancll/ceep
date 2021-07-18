import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import {Component} from "react";
import "./assets/css/App.css"

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
    deleteNote(index){
        let currentList = this.state.noteList;
        currentList.splice(index, 1);
        this.setState({noteList: currentList});
    }

    render(){
        return (
            <section className="content">
                <NoteForm createNote={this.createNote.bind(this)}/>
                <NoteList noteList={this.state.noteList} deleteNote={this.deleteNote.bind(this)}/>
            </section>
        );
    }
}

export default App;
