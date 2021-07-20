import React, {Component} from "react";
import NoteForm from "./components/NoteForm";
import CategoryList from "./components/CategoryList";
import NoteList from "./components/NoteList";
import Categories from "./data/Categories";
import Notes from "./data/Notes";
import "./assets/css/App.css"
import "./assets/css/index.css"


class App extends Component {
    constructor(props) {
        super(props);
        this.categories = new Categories();
        this.notes = new Notes();
    }
    // createNote(title, text, category){
    //     this.setState({
    //         ...this.state,
    //         noteList: [...this.state.noteList, {title, text, category}],
    //     });
    // }
    // deleteNote(index){
    //     let currentList = this.state.noteList;
    //     currentList.splice(index, 1);
    //     this.setState({
    //         ...this.state,
    //         noteList: currentList
    //     });
    // }

    // createCategory(category){
    //     this.setState({
    //         ...this.state,
    //        categoryList: [...this.state.categoryList, category]
    //     });
    // }
    render(){
        return (
            <section className="content">
                <NoteForm 
                    createNote={this.notes.createNote.bind(this.notes)}
                    categories={this.categories}
                />
                <main className="mainContent">
                    <CategoryList
                        categories={this.categories} 
                        // createCategory={this.categories.createCategory}
                    />
                    <NoteList
                        notes={this.notes} 
                        // deleteNote={this.notes.deleteNote}
                    />
                </main>
            </section>
        );
    }
}

export default App;
