const templateCard = document.querySelector('#template-card');

class Card {
    _template = templateCard.content;

    constructor() {}

    render(containerElement) {
        const viewElement = this._template.querySelector('.cards__item').cloneNode(true);
        containerElement.append(viewElement);
    }
}