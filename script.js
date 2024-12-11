// Домашнее задание к уроку №38: “LocalStorage и Работа с JSON”

// Задание 1: Сохранение примитивных данных в LocalStorage

localStorage.setItem('greeting', 'Привет, мир!');

const greeting = localStorage.getItem('greeting');
console.log(greeting);


// Задание 2: Удаление данных из LocalStorage

localStorage.removeItem('greeting');
console.log(localStorage.getItem('greeting'));


// Задание 3: Хранение объектов в LocalStorage с использованием JSON

let user = {
    name: 'Tom',
    age: 20,
    city: 'London',
}

const userJSON = JSON.stringify(user);
localStorage.setItem('user', userJSON);

const storedUser = localStorage.getItem('user');
console.log(storedUser); // строка
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser); // объект


// Задание 4: Модификация данных в LocalStorage

user.country = 'England';
console.log(user);

const userNewJSON = JSON.stringify(user);
localStorage.setItem('user', userNewJSON);
const storedNewUser = localStorage.getItem('user');
console.log(storedNewUser);


// Задание 5: Проверка наличия данных в LocalStorage

// localStorage.removeItem('user'); // для проверки 2-го условия 

if (localStorage.getItem('user')) {
    console.log(JSON.parse(localStorage.getItem('user')));
} else {
    let user2 = {name: 'John', age: 28, city: 'Paris'};
    const userJSON = JSON.stringify(user2);
    localStorage.setItem('user', userJSON);
    console.log(localStorage.getItem('user'));
}


// Задание 6: Очистка LocalStorage

localStorage.removeItem('user');
console.log(localStorage.getItem('user'));


// Задание 7: Сохранение списка задач в LocalStorage

const tasks = [
    { id:1, title: 'Сделать первое задание', completed: 'завершено'},
    { id:2, title: 'Сделать второе задание', completed: 'завершено'},
    { id:3, title: 'Сделать третье задание', completed: 'не завершено'}
];

const tasksJSON = JSON.stringify(tasks);
localStorage.setItem('tasks', tasksJSON);

const storedTasksJSON = localStorage.getItem('tasks');
const parsedTasks = JSON.parse(storedTasksJSON);
console.log(parsedTasks);


// Задание 8: Обновление состояния задачи

const parsedTasks2 = JSON.parse(localStorage.getItem('tasks'));
parsedTasks2[0].completed = true;

const taskJSON = JSON.stringify(parsedTasks2);
localStorage.setItem('tasks', taskJSON);
console.log(localStorage.getItem('tasks')); // в виде строки
console.log(JSON.parse(localStorage.getItem('tasks'))); // в виде массива
