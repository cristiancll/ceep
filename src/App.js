import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import {Component} from "react";
import "./assets/css/App.css"
import CategoryList from "./components/CategoryList";

class App extends Component {

    constructor() {
        super();
        this.state = {
            noteList: [],
            categoryList: ['Trabalho', 'Esportes']
        };
    }
    createNote(title, text){
        this.setState({
            ...this.state,
            noteList: [...this.state.noteList, {title, text}],
        });
    }
    deleteNote(index){
        let currentList = this.state.noteList;
        currentList.splice(index, 1);
        this.setState({
            ...this.state,
            noteList: currentList
        });
    }

    createCategory(category){
        this.setState({
            ...this.state,
           categoryList: [...this.state.categoryList, category]
        });
    }
    render(){
        return (
            <section className="content">
                <NoteForm createNote={this.createNote.bind(this)}/>
                <main className="mainContent">
                    <CategoryList categoryList={this.state.categoryList} createCategory={this.createCategory.bind(this)}/>
                    <NoteList noteList={this.state.noteList} deleteNote={this.deleteNote.bind(this)}/>
                </main>
            </section>
        );
    }
}

export default App;
