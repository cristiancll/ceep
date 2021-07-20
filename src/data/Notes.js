export default class Notes {
    constructor() {
        this.noteList = [];
        this.hooks = [];
    }

    hook(func) {
        this.hooks.push(func);
    }

    unhook(func){
        this.hooks.filter(f => f !== func);
    }
    notify() {
        this.hooks.forEach(func => func(this.noteList));
    }

    createNote(title, text, category) {
        const newNote = new Note(title, text, category);
        this.noteList.push(newNote);
        this.notify();
    }

    deleteNote(index) {
        this.noteList.splice(index, 1);
        this.notify();
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}
