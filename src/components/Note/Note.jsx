import React, {Component} from 'react';
import "./style.css";

class Note extends Component {
    render() {
        return (
            <section className="note">
                <header className="note_header">
                    <h3 className="note_h3">{this.props.title}</h3>
                </header>
                <p className="note_p">
                    {this.props.text}
                </p>
            </section>
        );
    }
}

export default Note;
