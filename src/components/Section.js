export default class Section {
    constructor(renderer, containerSelector) {
        // this._renderItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    } 

    // отрисовка всех карточек
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        }); 
    }

    // добавление карточек на страницу
    addItem(element) {
        this._container.prepend(element);
    }
}