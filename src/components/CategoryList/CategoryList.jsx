import React, {Component} from 'react';
import "./style.css"
import Category from "../Category";
import Note from "../Note";

class CategoryList extends Component {

    addCategory(e){
        if(e.key === "Enter"){
            this.props.createCategory(e.target.value);
            e.target.value = "";
        }
    }
    render() {
        return (
            <section className="categoryList">
                <ul className="categoryList_ul">
                    { this.props.categoryList.map((category, index) => {
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
