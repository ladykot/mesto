export default class UserInfo {
    constructor({name, description}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        // взять данные из профиля
        const userInfo = {
            name: this._name.textContent,
            description: this._description.textContent
        }
        return userInfo;
    }

    setUserInfo(userInfo) {
        // новые данные подставить в профиль
        this._name.textContent = userInfo.name;
        this._description.textContent = userInfo.description;
    }

}