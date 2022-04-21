export class PopupWithImage extends Popup {

    open({ link, name }) {
        this._popupElement.querySelector('.popup__title-big-image').textContent = name;
        const image =  this._popupElement.querySelector('.popup__image');
        image.src = link;
        image.alt = `Изображение ${name}`;
        super.open();
    }
}