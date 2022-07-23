export default class UserInfo {
    constructor({name, description, avatar}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
        this._avatar = document.querySelector(avatar);
        this.setUserAvatar = this.setUserAvatar.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);
    }

    getUserInfo() {
        // взять данные из профиля
        const userInfo = {
            name: this._name.textContent,
            description: this._description.textContent,
            avatar: this._avatar.src,
        } 
        return userInfo;
    }


    setUserInfo({name, about, _id}) {
        // новые данные подставить в профиль
        this._name.textContent = name;
        this._description.textContent = about;
        // id получаем в первый раз после запроса на сервер.
        this._id = _id;
    }

    setUserAvatar(link) {
        this._avatar.src = link;
    }

    getUserAvatar() {
        // получить аватар
        return {
            link: this._avatar.src
        }
    }

    getUserId() {
        // получить userId
        // return {
        //     userId: this._id
        // }
        return this._id
    }
}