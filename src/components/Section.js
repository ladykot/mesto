export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    } 

    // отрисовка всех карточек
    renderItems() {
        this._renderItems.forEach(item => {
            this._renderer(item);
        });
    }

    // добавление карточек на страницу
    addItem(element) {
        this._container.append(element);
    }
}