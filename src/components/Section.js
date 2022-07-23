export default class Section {
    constructor({items,renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
        this.renderItems = this.renderItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this._items = items;
    }

    // отрисовка всех карточек
    renderItems(items) {
        items.reverse().forEach((item) => {
            this.addItem(this._renderer(item))
        });
    }

    // добавление карточек на страницу
    addItem(element) {
        this._container.prepend(element);
    }
}