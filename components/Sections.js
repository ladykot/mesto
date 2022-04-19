export default class Sections {
    constructor({items, renderer}, containerSelector) {
        this._renderItems = items;
        this._renderer = renderer;
        this._container = containerSelector
    }

    // отрисовка всех карточек на странице
    renderItems() {
        this._renderItems.forEach(item => this.renderer(item))
    }


}