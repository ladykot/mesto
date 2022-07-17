export default class UserInfo {
    constructor({name, description, avatar}) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
        this._avatar = document.querySelector(avatar);
        this.setUserAvatar = this.setUserAvatar.bind(this)
    }

    getUserInfo() {
        // взять данные из профиля
        const userInfo = {
            name: this._name.textContent,
            description: this._description.textContent,
            avatar: this._avatar.src
        } 
        return userInfo;
    }

    setUserInfo(userInfo) {
        // новые данные подставить в профиль
        this._name.textContent = userInfo.name;
        this._description.textContent = userInfo.description;
        
    }

    setUserAvatar(link) {
        this._avatar.src = link;
        // debugger
    }   
}