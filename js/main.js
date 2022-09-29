// let user = ('user name');
//     user = 5;

// console.log(user);



// Домашнее задание №2

// const newArray = ['one', 2, true, 'four', 5];
// console.log(newArray[2]);

// const newObj = {
//     color: '#fff',
//     model: 'iphone',
//     price: 50000,
// };

// console.log(newObj.color);
// console.log(newObj.model);
// console.log(newObj.price);




// Домашнее задание №3

// const arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };

// const sayHello = () => {
//     let name = prompt('Как тебя зовут?');
//     alert(`Привет, ${name}`)
// };

// sayHello();

// const getAge = () => {
//     let age = prompt('Сколько вам лет?', '');

//     age < 5 ? alert('Вы младенец') :
//     age > 5 && age < 10 ? alert('Вы ребенок') :
//     age > 10 && age < 18 ? alert('Вы подросток') :
//     age > 18 && age < 65 ? alert('Вы взрослый') :
//     alert('Вы старик');
// };

// getAge();

// const getNum = () => {
//     let num = prompt('Назовите любое число от 3 до 5', '');

//     num % 3 == 0 && num % 5 == 0 ? alert('FizzBuzz') :
//     num % 3 == 0 ? alert('Fizz') :
//     num % 5 == 0 ? alert('Buzz') :
//     alert('Выберите теперь 3 или 5 или и 3 и 5 одновременно');
// };

// getNum();




// Домашнее задание №4

// const button = document.querySelector('.form__btn');

// button.addEventListener('click', (e) => {
//     e.preventDefault();

//     const password = document.getElementById('password');
//     const login = document.getElementById('login');

//     if (password.value + login.value == '') {
//         alert('Введите ваши данные для входа');
//     } else if (login.value == '') {
//         alert('Введите ваш логин');
//     } else if (password.value == '') {
//         alert('Введите ваш пароль')
//     } else if (login.value && password.value != '') {
//         alert(`Ваш логин: ${login.value}. Ваш пароль: ${password.value}.`)
//     };
// });


// Домашее задание №5

const root = document.getElementById('root');

fetch('https://rickandmortyapi.com/api/character/')
    .then(function(response){
        return response.json();
    })
    .then(function(responseJson){
        showCharacters(responseJson);
    })
    .catch(function(error){
        console.log(error);
    })

const makeElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

const showCharacters = (responseObject) => {
    
    const character = responseObject.results;
    console.log(character);
    character.forEach( ({ image, name, gender }) => {
        const article = makeElement('article', 'card');
        const characherImage = makeElement('img', 'character-img');
        const content = makeElement('div', 'character-info');
        const title = makeElement('h2', 'character-name');
        const characterGender = makeElement('span', 'character-gender');

        characherImage.src = image;
        title.textContent = name;
        characterGender.textContent = gender;

        content.appendChild(title);
        content.appendChild(characterGender);

        article.appendChild(characherImage);
        article.appendChild(content)

        root.appendChild(article);
    });
}