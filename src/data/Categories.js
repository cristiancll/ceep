export default class Categories {
    constructor() {
        this.categoryList = [];
        this.hooks = [];
    }

    createCategory(newCategory) {
        this.categoryList.push(newCategory);
        this.notify();
    }

    hook(func) {
        this.hooks.push(func);
    }
    unhook(func){
        this.hooks.filter(f => f !== func);
    }
    notify() {
        this.hooks.forEach(func => func(this.categoryList));
    }

}