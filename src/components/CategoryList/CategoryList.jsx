import React, {Component} from 'react';
import "./style.css"
import Category from "../Category";
import Note from "../Note";

class CategoryList extends Component {

    constructor(props) {
        super(props);
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
    addCategory(e){
        if(e.key === "Enter" && e.target.value.length > 0){
            this.props.categories.createCategory(e.target.value);
            e.target.value = "";
        }
    }
    render() {
        return (
            <section className="categoryList">
                <ul className="categoryList_ul">
                    { this.state.categories.map((category, index) => {
                        return(
                            <li className="categoryList_li" key={index}>
                                <Category index={index} category={category}/>
                            </li>
                        );
                    })}
                </ul>
                <input type="text" className="categoryList_input" placeholder="Adicionar Categoria" onKeyUp={this.addCategory.bind(this)}/>
            </section>
        );
    }
}

export default CategoryList;
