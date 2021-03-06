import React, {Component} from "react";
import "./style.css";

class NoteForm extends Component{

    constructor(props) {
        super(props);
        this._title = "";
        this._text = "";
        this._category = "";
        this.newCategoryHook = this.newCategory.bind(this);
        this.state = {categories: []};
    }
    
    
    componentDidMount() {
        this.props.categories.hook(this.newCategoryHook);
    }
    componentWillUnmount() {
        this.props.categories.unhook(this.newCategoryHook);
    }

    newCategory(categories){
        this.setState({...this.state, categories});
    }

    updateTitle(e){
        e.stopPropagation();
        this._title = e.target.value;
    }

    updateText(e){
        e.stopPropagation();
        this._text = e.target.value;
    }
    updateCategory(e){
        e.stopPropagation();
        this._category = e.target.value;
    }
    createNote(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.createNote(this._title, this._text, this._category);
    }

    render() {
        return(
            <form className="noteForm" onSubmit={this.createNote.bind(this)}>
                <select className="noteForm_input" onChange={this.updateCategory.bind(this)}>
                    <option/>
                    {this.state.categories.map((category, index) => {
                        return <option key={index}>{category}</option>
                    })}
                </select>
                <input type="text" placeholder="Título" className="noteForm_input" onChange={this.updateTitle.bind(this)} />
                <textarea placeholder="Escreva sua nota..." className="noteForm_input" rows="15" onChange={this.updateText.bind(this)}/>
                <button type="submit" className="noteForm_input noteForm_submit">Criar Nota</button>
            </form>
        );
    }
}

export default NoteForm;
