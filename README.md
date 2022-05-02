# Проект: Место

## О проекте

Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.

### Вёрстка и Стилизация
- Страница и модальные окна сверстаны c помощью grid и flex;
- Стили описаны по технологии БЭМ;
- Страница  и модальные окна адаптированы для большинства устройств.

### Интерактив

**Модальные окна**
С применением JS реализована работа следующих модальных окон:
- попап для редактирования информаци в профиле;
- попап для создания карточки;
- попап для просмотра фото в большом размере;

Для каждой формы применяется лайв-валидация классом FormValidator. Для каждого попапа описан свой класс на базе родительского класса Popup. Получения и редактирование информации о пользователе описаны классом UserInfo.

**Карточки**
С применением JS реализована работа с карточками:
- при загрузке страницы карточки автоматически добавляются на страницу;
- можно добавлять новые, удалять и лайкать карточки;
- карточки генерируются по шаблонам template;

Создание и добавление карточек на страницу описано классами Card и Section.

### Сборка проекта

Для упрощения поддержки кода разными браузерами проект собран программой-сборщиком Webpack.

[Проект на Gh-pages](https://ladykot.github.io/mesto/)
