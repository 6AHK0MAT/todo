# Приложение TODO

***Описание задания***

*Write a ToDo web application without a server.
 
The Application should provide the following functionality:
* Add a task with title
* Task list is sorted in reverse order by the task title
* Edit a task
* Mark a task as completed
* Remove a task
* Persist tasks between working sessions (it could be LocalStorage)
Note: it is ok for a "customer" if you do something quickly and provide additional features, but there will be no penalties if you don't.
 
Business context:
* Goal is the time to market
* Be ready to change something minor fast in the future
 
Non-Functional Requirements:
* Test task should be presented as a git repository with a history of changes. it could be located on GitHub (preferred) or folder with .git metadata.
* Application should be written on JavaScript, frameworks are up to developer.
* This task should take no more than 6-8 working hours(it is better to be less).*

------------
*УСТУНОВКА И ЗАПУСК.*

Для запуска данного проект вам будет необходим пакетный менеджер [Yarn](https://yarnpkg.com/) или [NPM](https://www.npmjs.com/)

Поджробности по установке и настройке данного ПО можно прочесть по [этой ссылке для Yarn](https://yarnpkg.com/getting-started/install) и [по этой ссылке для NPM](https://nodejs.org/en/download/)

Для запуска проект его необходимо скачть с репозитория по [текущей ссылке](https://github.com/6AHK0MAT/todo)
Или открыть новый проект в любой IDE с использованием функционала "Get from Versio Control". В стороке URL указав адрес репозитория.

https://github.com/6AHK0MAT/todo

После вам нужно пройти в папку с проектом и установить все необходимы зависимости и бибилиотеки.

В записимости от того каким пакетным менеджером вы позьзуетесь это будет по разному.
***yarn install*** - для Yarn
***npm install*** - для NPM

После установки зависимостей, вы можете проверить все ли у вас получилось, в проекте должна появиться папка ***node_modules***

*РЕШЕНИЕ ЗАДАЧИ.*

Данный Проект был создан при помощи [Create React App](https://github.com/facebook/create-react-app).<br>
Дополнительно были использованы следующие библиотеки: <br>
[prop-types](https://www.npmjs.com/package/prop-types)<br>
Для сохранения состояния после перезагрузки или нового открытия приложения была испольщована библиотека
[redux-localstorage-simple](https://www.npmjs.com/package/redux-localstorage-simple)<br>

## Скрипты в проекте

Для запуска в директории проекта вы можете запустить:

### `yarn start` или `npm run start`

Приложение будет запущено в режиме разработки.<br />
Откройте [http://localhost:3000](http://localhost:3000) для просмотра приложения в браузере.

Приложение будет перегужаться само если вы будете делать правки (Hot reload - "Горячая перезагрузка").<br />

Возможные ошибки вы можете отслеживать в консоли.

### `yarn build` или `npm run build`

Создание файлов для переноса на сервер в папке `build`.<br />
Оптимизируется сборка для лучшей производительности.

После сборки ваше приложение готово к переносу на сервер, подробности как это сделать можно прочесть [по этой ссылке](https://facebook.github.io/create-react-app/docs/deployment).

